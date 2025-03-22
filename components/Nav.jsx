"use client";
import Link from 'next/link';
import Image from 'next/image';
import "../styles/nav.css";
import { useState, useEffect } from 'react';
import { signIn, signOut , useSession, getProvider } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/logo.jpg"
          alt="Mon logo"
          width={80}
          height={80}
          className="rounded"
        />
        <p className='logo_text'>Notitia</p>
      </Link>
      {/* Navigation desktop*/}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Gabarits
            </Link>
            <button type="button" onClick={signOut} className='outline_btn'>
              Deconnecter
            </button>
            <Link href="/profile">
              <Image 
                src="/assets/images/logo.png"
                width={65}
                height={65}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            
          </>
        )} 

      </div>

      { /* Navigation mobile*/ }
      <div>

      </div>
    </nav>
  )
}

export default Nav;