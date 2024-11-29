'use client';
import LocaleSwitcher from '@/components/LocaleSwitcher'
import Image from 'next/image';
import { Quicksand } from 'next/font/google'
import clsx from 'clsx';
import { useState } from 'react';
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
    }//this is bad. should be replaced with useEffect

    return(
        <div className={clsx(`bg-white z-50
        h-20 px-4 fixed w-full top-0 start-0 flex justify-between items-center transition-all`, 
        isScrolledTop ? 
        "shadow-none":
        "shadow-lg")}>
            <Image className=''
                src="/innovare-logo.svg" 
                alt="Innovare Logo"
                width={290}
                height={60}>
            </Image>
            {children}
        </div>
    )
}