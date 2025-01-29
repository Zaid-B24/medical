"use client";

import { SigninSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { AtSign,  KeyRound } from "lucide-react";
import { signinWithCredentials } from "@/lib/actions/auth";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

const SigninForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 const onSubmit = async (data: z.infer<typeof SigninSchema>) => {
 
         const result = await signinWithCredentials(data);
         if(result.success) {
             toast({
                 title: "Success",
                 description: "Sign in successfull",
               });
         router.push('/home');
         } else {
             toast({
                 title: "Error",
                 description: result.error,
                 variant: "destructive",
               });
         }
         
     };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <div className="pt-2">
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-2"
          >
            Sign in
          </Button>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SigninForm;


// <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="flex justify-center">
    //       <div className="flex items-center space-x-2">
    //         <FileText className="h-8 w-8 text-blue-600" />
    //         <span className="font-bold text-2xl text-gray-900">MediTrack Pro</span>
    //       </div>
    //     </div>
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //       Welcome back
    //     </h2>
    //     <p className="mt-2 text-center text-sm text-gray-600">
    //       Sign in to your account to continue
    //     </p>
    //   </div>

    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
    //       <Form {...form}>
    //         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    //           <FormField
    //             control={form.control}
    //             name="email"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Email address</FormLabel>
    //                 <FormControl>
    //                   <div className="relative">
    //                     <FileText className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
    //                     <Input
    //                       {...field}
    //                       placeholder="you@example.com"
    //                       className="pl-10"
    //                     />
    //                   </div>
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />

    //           <FormField
    //             control={form.control}
    //             name="password"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Password</FormLabel>
    //                 <FormControl>
    //                   <div className="relative">
    //                     <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
    //                     <Input
    //                       {...field}
    //                       type="password"
    //                       placeholder="Enter your password"
    //                       className="pl-10"
    //                     />
    //                   </div>
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />

    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <input
    //                 id="remember-me"
    //                 name="remember-me"
    //                 type="checkbox"
    //                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    //               />
    //               <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
    //                 Remember me
    //               </label>
    //             </div>

    //             <div className="text-sm">
    //               <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
    //                 Forgot your password?
    //               </a>
    //             </div>
    //           </div>

    //           <Button
    //             type="submit"
    //             className="w-full"
    //           >
    //             Sign in
    //           </Button>

    //           <div className="mt-6">
    //             <div className="relative">
    //               <div className="absolute inset-0 flex items-center">
    //                 <div className="w-full border-t border-gray-300"></div>
    //               </div>
    //               <div className="relative flex justify-center text-sm">
    //                 <span className="px-2 bg-white text-gray-500">
    //                   Don&apos;t have an account?{" "}
    //                   <a href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
    //                     Sign up
    //                   </a>
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </Form>
    //     </div>
    //   </div>
    // </div>