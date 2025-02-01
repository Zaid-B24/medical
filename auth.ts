import NextAuth, { User } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from "@/db";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session:{
    strategy:"jwt",
  },
  providers: [
    CredentialsProvider({
      name:'Credentials',
      credentials: {
        email:{ label: 'email', type: 'text', placeholder: ''},
        password:{label: 'password', type: 'password', placeholder: ''},
      },
      authorize: async(credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {

          if (typeof credentials?.email !== "string" || typeof credentials?.password !== "string") {
            throw new Error("Invalid email or password format");
          }
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
            select: {
              id:true,
              email: true,
              password:true,
              name:true,
            }
          })

          if(!user) {
            return null
          }
          if (user.email.length === 0) return null;

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid email or password");
          }
          console.log("this is user object being returned", user);
          
          return {
            id:user.id,
            email:user.email,
            name:user.name || user.email.split('@')[0],
          } as User
        } catch (error) {
          console.log("Authorization Error:", error);
          throw error
        }
      },
    }),
  ],
  pages: {
    signIn:"/sign-in"
  },
  callbacks: {
    async jwt({token, user}) {
      if(user) {
        token.id =  user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session ({session, token}) {
      if(session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string
      }
      return session;
    },
  }
})

