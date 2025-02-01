"use server"

import prisma from "@/db"

export async function savePatientData(formData: {
    fullname: string;
    email: string;
    date: string;
    note: string;
    number: string;
    address: string;
    paymentmethod: string;
    discount: string;
  }) {
    console.log("Form Data:", formData);
    try {
      // Clean up the data before sending to Prisma
      const prismaData = {
        fullname: formData.fullname,
        email: formData.email,
        date: new Date(formData.date), // Convert string to Date object
        note: formData.note,
        number: formData.number,
        address: formData.address,
        paymentmethod: formData.paymentmethod,
        discount: formData.discount || null, // Handle empty string
      };
  
      const patient = await prisma.patient.create({
        data: prismaData
      });
  
      return { success: true };
    } catch (error) {
      console.error("Signup error:", error);
      // Log the actual error for debugging
      if (error instanceof Error) {
        return { success: false, error: error.message };
      }
      return { success: false, error: "An error occurred during saving data" };
    }
  }


  export async function getPatientByNumber (number:string) {
    try {
        const patient = await prisma.patient.findUnique({
            where: {
                number: number
            },
            select:{
              fullname: true,
              email: true,
              note: true,
              address: true
            }
        });

        if(patient) {
            return {
                success:true,
                data:patient
            };
        }
        
        return {
            success: false,
            message: "No patient found with this number"
        };
    } catch (error) {
        console.error("Fetch error:", error);
        return {
            success: false,
            error: "Error fetching patient data"
        };
    }
  }