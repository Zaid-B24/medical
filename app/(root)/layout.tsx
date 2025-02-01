import { auth } from '@/auth'
import Navbar from '@/components/Header/Navbar';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({children}: {children:React.ReactNode}) => {

  const session = await auth();
  if(!session?.user) redirect("/")

  return (
    <div>
      <Navbar initialSession = {session} />
      {children}
    </div>   
  )
}

export default layout




