// import Navbar from '@/components/Navbar';
// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { Toaster } from '@/components/ui/toaster';
// import Provider from '@/components/Provider';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en'>
//       <body className={inter.className}>
//         <Provider>
//         <main className='h-screen flex flex-col justify-center items-center'>
//           <Navbar />
//           {children}
//         </main>
//         <Toaster/>
//         </Provider>
//       </body>
//     </html>
//   );
// }

import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Provider from '@/components/Provider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="h-screen flex flex-col">
            {/* Navbar is fixed, so account for its height */}
            
            <Navbar />
            <main className="flex-grow pt-16">{/* Account for navbar height */}
              {children}
            </main>
            
          </div>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}