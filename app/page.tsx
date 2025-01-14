
import { redirect } from "next/navigation";


export default async function Home() {
  redirect('/dashboard')
  return <div>
   
    {/* <Link className ={buttonVariants()} href='/dashboard'>Open my dashboard</Link> */}
   
    
  </div>;
}
