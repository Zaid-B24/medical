import React from 'react'

const layout = async ({children}:{children:React.ReactNode}) => {

  // const sesssion = await auth();
  // if(sesssion) redirect("/dashboard");
  // if(!sesssion) redirect("sign-in")
  
  return (
    <div>
        {children}
    </div>
  )
}

export default layout;

