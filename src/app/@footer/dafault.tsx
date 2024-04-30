
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGoogleSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
export default function Footer() {
    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center border-t-2 px-4 py-2 h-auto md:h-24 mt-5'>
            <div className='flex flex-col w-full md:w-auto md:flex-col'>
                <Link href="/" className='font-bold mb-2 md:mb-0 md:mr-2 flex justify-center md:justify-center'>Social media</Link>
                <div className='flex flex-row gap-1 justify-center md:justify-start'>
                    <Link href="/" className='mr-2 font-bold'>
                        <AiFillGoogleSquare className='w-[50px] h-[50px]' />
                    </Link>
                    <Link href="/" className='mr-2 font-bold'>
                        <AiFillInstagram className='w-[50px] h-[50px]' />
                    </Link>
                    <Link href="/" className='mr-2 font-bold'>
                        <AiFillYoutube className='w-[50px] h-[50px]' />
                    </Link>
                </div>
            </div>
            <div className='grow mt-5 md:mt-0 flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap'>
                <div className='flex flex-col items-center mb-3 md:mb-0'>
                    <Link href="/">Location</Link>
                    <p>Sri Lanka, Colombo</p>
                </div>

                <div className='flex flex-col items-center mb-3 md:mb-0'>
                    <Link href="/">Mobile</Link>
                    <p>+94 xxx xxx xx</p>
                </div>

                <div className='flex flex-col items-center mb-3 md:mb-0 md:hidden lg:flex'>
                    <Link href="/">Contact us</Link>
                    <p>Connect with social media</p>
                </div>

                <div className='flex flex-col items-center mb-3 md:mb-0 md:hidden lg:flex'>
                    <Link href="/">About</Link>
                    <p>Web development company</p>
                </div>
            </div>

            <div className="w-fit text-center md:text-right text-xs mt-5 md:mt-0">
                &copy; {new Date().getFullYear()} LearningWithMe. All Rights Reserved.
            </div>
        </div>

    )
}
