import Link from 'next/link';
import {  buttonVariants } from './ui/button';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
 
import UserAccountnav from './UserAccountnav';

const Navbar =async () => {
    const session=await getServerSession(authOptions)
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 text-black'>
      <div className='container flex items-center justify-between pl-8'>
        <Link href='/'>
          <b>
          <h2>Eigengram</h2>
          </b>
        </Link>
       {session?.user?(
        <UserAccountnav/>
       ):( <Link className={buttonVariants()} href='/sign-in'>
       <div className='text-white'>
         Sign in
         </div>
       </Link>)}
      </div>
    </div>
  );
};

export default Navbar;
