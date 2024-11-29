'use client';
import clsx from "clsx";
import { useState,useEffect } from "react";
import Image from "next/image";
import { setInterval,clearInterval } from "timers";

export default function PictureShowcase(){
    
    const [activePicture,setActivePicture] = useState(0)
    const pictures = [0,1,2]
    useEffect(() => {
        const interval = setInterval(() => {
            if( activePicture === pictures.length - 1){
                setActivePicture(0)
            }
            else{
                setActivePicture(activePicture + 1)
            }
        },8000)
        return () => clearInterval(interval);    
    },[activePicture])

    return(
        <div className="relative h-[300px] w-[480px]">
            <Image className={clsx(activePicture === 0? "top-[-10px] z-10" : "" ,"top-0 duration-300 rounded border-gray-300 border-[2px] w-auto h-[300px] absolute transition-all")} src="/suite1.jpg" alt="course1" height={749} width={1000}></Image>
            <Image className={clsx(activePicture === 1? "top-[-10px] z-10" : "" ,"top-0 duration-300 rounded border-gray-300 border-[2px] w-auto h-[300px] absolute left-10 transition-all")} src="/suite2.jpg" alt="course2" height={746} width={1000}></Image>
            <Image className={clsx(activePicture === 2? "top-[-10px] z-10" : "" ,"top-0 duration-300 rounded border-gray-300 border-[2px] w-auto h-[300px] absolute left-20 transition-all")} src="/suite3.png" alt="course3" height={746} width={1000}></Image>
        </div>
    )
}