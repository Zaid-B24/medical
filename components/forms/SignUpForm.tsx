"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignUpSchema } from "@/lib/validation"; // Ensure SignUpSchema is properly defined in this file
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUp } from "@/lib/actions/auth"; // Ensure this function returns { success: boolean, error?: string }
import { AtSign, KeyRound, User } from "lucide-react";
import Link from "next/link";

// Define the type inferred from SignUpSchema
type SignUpFormData = z.infer<typeof SignUpSchema>;

const SignupForm = () => {
  const router = useRouter();

  // Initialize the form with zod schema validation
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUp(data);

      if (result.success) {
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
        router.push("/sign-in");
      } else {
        toast({
          title: "Error",
          description: result.error || "An error occurred",
          variant: "destructive",
        });
      }
    } catch (error) {
        console.log(error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Username</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Create a password"
                    {...field}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-2"
          >
            Create Account
          </Button>
        </div>

        {/* Already have an account? */}
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-gray-400">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;

//     return(
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                     control={form.control}
//                     name={"name"}
//                     render={({field}) => (
//                         <FormItem className="rounded-md shadow-sm space-y-4">
//                             <FormLabel className="block text-sm font-medium text-gray-700">
//                                 Username
//                             </FormLabel>
//                             <FormControl>
//                                 <Input 
//                                 required
//                                 placeholder="username"
//                                 {...field}
//                                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name={"email"}
//                     render={({field}) => (
//                         <FormItem className="rounded-md shadow-sm space-y-4">
//                             <FormLabel className="block text-sm font-medium text-gray-700">
//                                 Email
//                             </FormLabel>
//                             <FormControl>
//                                 <Input 
//                                 required
//                                 placeholder="email"
//                                 {...field}
//                                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name={"password"}
//                     render={({field}) => (
//                         <FormItem className="rounded-md shadow-sm space-y-4">
//                             <FormLabel className="block text-sm font-medium text-gray-700">
//                                 Passwword
//                             </FormLabel>
//                             <FormControl>
//                                 <Input
//                                 id="password"
//                                 type="password"
//                                 required
//                                 placeholder="password"
//                                 {...field}
//                                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name={'confirmPassword'}
//                     render={({field}) => (
//                         <FormItem className="rounded-md shadow-sm space-y-4">
//                             <FormLabel className="block text-sm font-medium text-gray-700">
//                                 Confirm Password
//                             </FormLabel>
//                             <FormControl>
//                                 <Input
//                                 id="password"
//                                 type="password"
//                                 required
//                                 placeholder="confirm password"
//                                 {...field}
//                                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <Button type="submit" className="">
//                     Sign up
//                 </Button>
//                 <div className="mt-6">
//                 <div className="relative">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-gray-300"></div>
//                   </div>
//                   <div className="relative flex justify-center text-sm">
//                     <span className="px-2 bg-white text-gray-500">
//                       Already have an account?{" "}
//                       <a href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
//                         Sign in
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </form>
//         </Form>
//     )
// } 


// export default SignupForm;





// const SignupForm = () => {
//   const router = useRouter();

//   const form = useForm<z.infer<typeof SignUpSchema>>({
//     resolver: zodResolver(SignUpSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
//     const result = await signUp(data);
//     if (result.success) {
//       toast({
//         title: "Success",
//         description: "Account created successfully",
//       });
//       router.push("/sign-in");
//     } else {
//       toast({
//         title: "Error",
//         description: result.error,
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input
//                   required
//                   placeholder="Enter your username"
//                   {...field}
//                   className="w-full"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input
//                   required
//                   type="email"
//                   placeholder="Enter your email"
//                   {...field}
//                   className="w-full"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input
//                   required
//                   type="password"
//                   placeholder="Create a password"
//                   {...field}
//                   className="w-full"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="confirmPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Confirm Password</FormLabel>
//               <FormControl>
//                 <Input
//                   required
//                   type="password"
//                   placeholder="Confirm your password"
//                   {...field}
//                   className="w-full"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="pt-2">
//           <Button type="submit" className="w-full">
//             Create Account
//           </Button>
//         </div>

//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-200" />
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-muted-foreground">
//               Already have an account?{" "}
//               <Link
//                 href="/sign-in"
//                 className="font-medium text-primary hover:text-primary/90"
//               >
//                 Sign in
//               </Link>
//             </span>
//           </div>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default SignupForm;



