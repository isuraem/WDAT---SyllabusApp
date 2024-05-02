"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Popover } from '@headlessui/react'
import "./styles.css";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Header() {
    let [navBar, setNavBar] = useState(false)
    const [loginStatus, setLoginStatus] = useState(false);
    const { user, error, isLoading } = useUser();

    // if(user?.name){
    //     setLoginStatus(true)
    // }
    return (
        <Popover className='container mx-auto flex items-center border-b-2 px-4 py-2 h-24'>
            <h1 className='font-bold'>LearningWithMe</h1>
            <div className='grow'>
                <div className=' hidden sm:flex items-center justify-center gap-2'>
                    <Link href="/">Home</Link>
                    <Link href="/web">Web</Link>
                    <Link href="/">Server</Link>
                    <Link href="/">Mobile</Link>
                </div>
            </div>
            <div className='flex grow items-center justify-end sm:hidden'>
                <Popover.Button className="inline-flex items-center justify-center rounded-d bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <AiOutlineBars className='w-[25px] h-[25px]' />

                </Popover.Button>

            </div >
            <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top-right transform  transition md:hidden z-10"
            >
                <div className='rounded-lg bg-white shadow-lg right-1 ring-black ring-opacity-5 divide-y-2 devide-gray50'>
                    <div className='px-5 pt-5 pb-6'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold'>LearningWithMe</h1>
                            <div className='-mr-2'>
                                <Popover.Button className="inline-flex items-center justify-center rounded-d bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <AiOutlineLine className='w-[25px] h-[25px] aria-hidden:"true"' />

                                </Popover.Button>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <nav className='grid gap-y-8'>
                                <Link
                                    className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px2'
                                    href="/">Home</Link>
                                <Link
                                    className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px2'
                                    href="/web">Web</Link>
                                <Link
                                    className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px2'
                                    href="/">Server</Link>
                                <Link
                                    className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px2'
                                    href="/">Mobile</Link>
                            </nav>
                        </div>
                        {user?.name}
                        {!user &&
                            <>
                                <div className='mt-6 flex flex-col items-center gap-2'>
                                    <Link
                                        href="/api/auth/login"
                                        className='rounded-nd bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full focus: outline-none focus: ring-2 focus: ring-inset focus: ring-gray-500'
                                    >
                                        Sign Up
                                    </Link>
                                    <Link
                                        href="/api/auth/login"
                                        className='rounded-nd bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full focus: outline-none focus: ring-2 focus: ring-inset focus: ring-gray-500'
                                    >
                                        Login
                                    </Link>
                                </div>
                            </>
                        }
                         {user &&
                            <>
                                <div className='mt-6 flex flex-col items-center gap-2'>
                                    <Link
                                        href="/api/auth/login"
                                        className='rounded-nd bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full focus: outline-none focus: ring-2 focus: ring-inset focus: ring-gray-500'
                                    >
                                       Logout
                                    </Link>
                                   
                                </div>
                            </>
                        }
                    </div>
                </div>

            </Popover.Panel>

            <div className='hidden sm:block'>
                {user?.name}
                {!user &&
                    <>
                        <Link href="/api/auth/login" className='mr-2 font-bold'>Sign Up</Link>
                        <Link href="/api/auth/login" className='mr-2 font-bold'>Login</Link>
                    </>

                }
                {user &&
                    <>
                        <Link href="/api/auth/logout" className='mr-2 font-bold ml-2'>Logout</Link>
                    </>
                }

            </div>
        </Popover >
    )
}
