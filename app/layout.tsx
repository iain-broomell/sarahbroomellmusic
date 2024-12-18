import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Piano Teaching Services',
  description: 'Professional piano lessons for students of all levels.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <header className="relative flex items-center justify-center p-4 bg-gray-900 text-white">
          <div className="absolute left-4 flex items-center">
            <span className="text-lg font-bold"><a href="/">Sarah Broomell Music</a></span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="text-center py-4 bg-gray-900 text-white">
          &copy; Sarah Broomell Music. No rights reserved.
          <a href="https://www.vecteezy.com/free-vector/piano-logo"> Piano Logo Vectors by Vecteezy</a>
        </footer>
      </body>
    </html>
  );
}
