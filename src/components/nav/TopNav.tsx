'use client';
import LocaleSwitcher from '@/components/LocaleSwitcher'
import Image from 'next/image';
import logo from '@/assets/innovare-logo.svg'
import { Quicksand } from 'next/font/google'
import clsx from 'clsx';
import { useState,useEffect } from 'react';
const textfont = Quicksand({subsets:['latin']})



export default function TopNav({children}:{children: React.ReactNode;}){
    const [isScrolledTop,setScrolledTop] = useState(true)
    function handleScroll(){
        if(window.scrollY == 0){
            setScrolledTop(true)
        }else{
            setScrolledTop(false)
        }
    }

    if(typeof window !== "undefined"){
        window.addEventListener("scroll",handleScroll)
    }

    return(
        <div className={clsx(`${textfont.className} bg-white 
        h-20 px-4 fixed w-full top-0 start-0 flex justify-between items-center transition-all`, 
        isScrolledTop ? 
        "hadow-none":
        "shadow-xl")}>
            <Image 
                src={logo} 
                alt="Innovare Logo"
                width={290}
                height={60}>
            </Image>
            {children}
            <div className="hidden sm:block">
            <LocaleSwitcher></LocaleSwitcher>
            </div>
        </div>
    )
}