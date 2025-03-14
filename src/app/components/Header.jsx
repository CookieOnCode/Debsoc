'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Open_Sans } from 'next/font/google';

// Initialize Open Sans font
const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
   
    { href: '/blogs', label: 'B L O G S' },
  ];

  return (
    <header className={`bg-white dark:bg-black shadow-md ${openSans.variable}`}>
      <div className="container mx-auto px-4 py-1">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left - Home */}
          <div className="flex items-center space-x-8" >
            <Link href="/home" className="flex items-center">
              <img
                src="images/debsoc logo 2.png"
                alt="Home"
                className="w-16 h-auto mr-4"
              />
              <span className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                
              </span>
            </Link>
           
          </div>

          {/* Right - Navigation Links */}
          <nav className="flex items-center space-x-10">
          <Link href="/nsmpd" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 ">
              N S M P D 
            </Link>
            <Link href="/nsutmun" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              N S U T M U N
            </Link>
            <Link href="/pd" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              P  D 
            </Link>
            <Link href="/mun" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              M U N
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/home" className="flex items-center">
              <img
                src="images/debsoc logo 2.png"
                alt="Home"
                className="w-12 h-auto mr-2"
              />
              <span className="text-gray-800 dark:text-white">Home</span>
            </Link>
            <button
              className="text-gray-800 dark:text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="mt-4 space-y-4">
              <Link href="/parlimentary-debating" className="block py-2 px-4 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 text-center">
                Parlimentary debating
              </Link>
              <Link href="/model-united-nations" className="block py-2 px-4 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 text-center">
                Model united nations
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 px-4 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
