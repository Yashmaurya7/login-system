
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Home() {
  
  const session= await getServerSession(authOptions);
  
  if(!session){
    redirect('/sign-in')
  }
    if(session?.user){
      redirect('/dashboard')
    }

  
  
  return <div>

   
    {/* <Link className ={buttonVariants()} href='/dashboard'>Open my dashboard</Link> */}
   
    
  </div>;
}
