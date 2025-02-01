import { auth } from "@/auth";
import LandingPage from "@/components/Landing/LandingPage";
import { redirect } from "next/navigation";

export default async function Home() {
   const session = await auth();
   if(session?.user) {
    redirect("/home")
   }
  return (
    <main>
      <LandingPage />
    </main>
  );
}
