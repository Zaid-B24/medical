import { z } from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long." }),
    email: z.string().email({ message: "Please provide a valid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
    confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters long." }),
}).refine(data => data.password === data.confirmPassword, {
    path:["confirmPassword"],
    message:"Password must match.",
});


export const SigninSchema = z.object({
    email: z.string().email({ message: "Please provide a valid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
});

export const BillingSchema = z.object({
    fullname: z.string().min(3, { message: "First Name must be at least 3 characters long." }),
    email: z.string().email(),
    date:z.string().date(),
    note:z.string(),
    number : z.string().min(10, {message:"Number should be 10 digits long."}),
    address: z.string(),
    paymentmethod: z.enum(["UPI", "CASH"]),
    discount:z.string(),
})

