'use server'

import { signIn } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
const client = new PrismaClient;


export const signUp = async (params) => {
    const {name, email, password, confirmPassword} = params;

   if(password != confirmPassword) {
    return {success:false, error: "Password dont match"};
   }

   const existingUser = await client.user.findFirst({
    where: {
        email,
    },
   });

   if(existingUser)  {
    return {success:false, error:"User Already exist"}
   }

   const hashedPassword = await hash(password, 10);

   try {
    await client.user.create({
        data:{
            name,
            email,
            password:hashedPassword,
        },
    });
    return {success:true};
   } catch (error) {
    console.error("Signup error:", error);
    return { success: false, error: "An error occurred during signup" };
   }
    
}

export const signinWithCredentials = async (params) => {
    const {email,password} = params;

    try {
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        })

        if (result?.error) {
            return { success: false, error: result.error };
          }

          return { success: true };
    } catch (error) {
        console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
    }
}