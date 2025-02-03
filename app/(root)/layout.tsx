import { auth } from '@/auth'
import Navbar from '@/components/Header/Navbar';
import { AppSidebar } from '@/components/Sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { redirect } from 'next/navigation';
import { cookies } from "next/headers"
import React from 'react'

const layout = async ({children}: {children:React.ReactNode}) => {

  const session = await auth();
  if(!session?.user) redirect("/");
  

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    
    <SidebarProvider defaultOpen={defaultOpen} >
      <AppSidebar />
      <div className='w-full'>
        <Navbar initialSession = {session} />
        {children}
      </div>
    </SidebarProvider>
  )
}

export default layout




