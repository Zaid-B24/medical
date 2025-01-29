"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BillingSchema } from "@/lib/validation";
import { toast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "../ui/card";
import { User, Mail, Home, Calendar, Phone, FileText, ArrowRight, Wallet, IndianRupee, CreditCard } from "lucide-react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const mockData = [
  { number: "520-995-3718", fullname: "Genni", date: "2024-05-26", email: "gbodker0@google.com.hk", address: "11th Floor", note: "Hello" },
  { number: "712-815-3727", fullname: "Barbabra", date: "2024-07-22", email: "bhaylor1@guardian.co.uk", address: "Apt 1153", note: "Hello" },
  { number: "617-278-6805", fullname: "Madel", date: "2024-05-18", email: "mbyne2@examiner.com", address: "PO Box 86533", note: "Hello" },
  { number: "288-908-7833", fullname: "Griselda", date: "2024-06-06", email: "gdelion3@arstechnica.com", address: "Room 847", note: "Hello" },
  { number: "259-115-9237", fullname: "Ardella", date: "2024-08-12", email: "aseres4@berkeley.edu", address: "11th Floor", note: "Hello" },
];

const Billing = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof BillingSchema>>({
        resolver: zodResolver(BillingSchema),
        defaultValues: {
            fullname: "",
            email: "",
            date: new Date().toISOString().split("T")[0],
            note: "",
            number: "",
            address: "",
            paymentmethod:"Cash",
        }
    });

    const fetchUserDetails = (event: React.FocusEvent<HTMLInputElement>) => {
            const inputNumber = event.target.value;
            const existingRecord = mockData.find((record) => record.number === inputNumber);
        
            if (existingRecord) {
              form.setValue("fullname", existingRecord.fullname);
              form.setValue("email", existingRecord.email);
              form.setValue("date", existingRecord.date);
              form.setValue("note", existingRecord.note);
              form.setValue("address", existingRecord.address);
            }
          };

    const onsubmit = async (values: z.infer<typeof BillingSchema>) => {
        const result = await values;
        if(result) {
            toast({
                title: "Success",
                description: "Your information has been submitted successfully."
            });
            router.push("/hello");
        }
    };

    return (
        <Card className="w-full shadow-lg bg-card">
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            Phone Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="bg-background/50 focus:bg-background transition-colors"
                                                {...field}
                                                onBlur={fetchUserDetails}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            Full Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                required
                                                placeholder="Enter patient's full name"
                                                className="bg-background/50 focus:bg-background transition-colors"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            Date
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="date"
                                                className="bg-background/50 focus:bg-background transition-colors"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        Email Address
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter patient's email address"
                                            className="bg-background/50 focus:bg-background transition-colors"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                        <Home className="h-4 w-4 text-muted-foreground" />
                                        Address
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Patient's full address"
                                            className="bg-background/50 focus:bg-background transition-colors"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="note"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                        Additional Notes
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Any additional information"
                                            className="bg-background/50 focus:bg-background transition-colors"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="paymentmethod"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="flex items-center gap-2 text-sm font-medium">
                                        <Wallet className="h-4 w-4 text-primary" />
                                        Payment Method
                                    </FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="grid grid-cols-2 gap-4"
                                        >
                                            <Label
                                                htmlFor="upi"
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                                            >
                                                <RadioGroupItem value="UPI" id="upi" className="sr-only" />
                                                <CreditCard className="mb-3 h-6 w-6 text-primary" />
                                                <span className="flex items-center gap-2">
                                                    <IndianRupee className="h-4 w-4" />
                                                    UPI
                                                </span>
                                            </Label>
                                            <Label
                                                htmlFor="cash"
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                                            >
                                                <RadioGroupItem value="Cash" id="cash" className="sr-only" />
                                                <Wallet className="mb-3 h-6 w-6 text-primary" />
                                                <span className="flex items-center gap-2">
                                                    <IndianRupee className="h-4 w-4" />
                                                    Cash
                                                </span>
                                            </Label>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="px-6 pb-6">
                <Button 
                    onClick={form.handleSubmit(onsubmit)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                >
                    Submit Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Billing;

