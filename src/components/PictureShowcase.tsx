'use client';
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

export default function PictureShowcase(){
    const [isActive,setActive] = useState(0)
    return(
        <div className="relative h-[300px] w-[480px]">
            <Image className="hover:z-10 top-0 hover:top-[-10px] rounded border-white border-[2px] w-auto h-[300px] absolute transition-all" src="/suite1.jpg" alt="course1" height={749} width={1000}></Image>
            <Image className="hover:z-10 top-0 hover:top-[-10px] rounded border-white border-[2px] w-auto h-[300px] absolute left-10 transition-all" src="/suite2.jpg" alt="course1" height={746} width={1000}></Image>
            <Image className="hover:z-10 top-0 hover:top-[-10px] rounded border-white border-[2px] w-auto h-[300px] absolute left-20 transition-all" src="/suite3.png" alt="course1" height={746} width={1000}></Image>
        </div>
    )
}