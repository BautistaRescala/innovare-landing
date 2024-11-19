'use client';
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
const contentfont = Outfit({ subsets: ['latin'] })


export default function HomePageTab() {
    const [activeIndex, setActiveIndex] = useState(1)
    const logos = ["cplusplus-logo.svg", "csharp-logo.png", "js-logo.png","typescript-logo.svg","golang-logo.svg","java-logo.svg", "kotlin-logo.svg", "swift-logo.svg"]
    return (
        <div className={`${contentfont.className} flex items-center flex-col`}>
            <div className="flex justify-center md:w-[80%] w-[95%] rounded-t-lg">
                <button type="button" onClick={() => setActiveIndex(1)} className={clsx("basis-0 h-fit grow font-semibold pb-[2px]", activeIndex === 1 ? "bg-red-950" : "bg-slate-500")}>
                    <div className={clsx("justify-center items-center flex w-full h-full text-black p-2", activeIndex === 1 ? "bg-gradient-to-t from-slate-200 from-10% to-white" : "bg-white")}>
                        <CodeBracketIcon className="md:w-6 md:h-6 h-8 w-8"></CodeBracketIcon>
                        <p className="px-2 hidden md:block">Lenguajes de programacion</p>
                    </div>
                </button>
                <button type="button" onClick={() => setActiveIndex(2)} className={clsx("basis-0 grow font-semibold pb-[2px]", activeIndex === 2 ? "bg-red-950" : "bg-slate-500")}>
                    <div className={clsx("justify-center items-center flex w-full h-full text-black p-2", activeIndex === 2 ? "bg-gradient-to-t from-slate-200 from-10% to-white" : "bg-white")}>
                        Gradient border
                    </div>
                </button>
                <button type="button" onClick={() => setActiveIndex(3)} className={clsx("basis-0 grow font-semibold pb-[2px]", activeIndex === 3 ? "bg-red-950" : "bg-slate-500")}>
                    <div className={clsx("justify-center items-center flex w-full h-full text-black p-2", activeIndex === 3 ? "bg-gradient-to-t from-slate-200 from-10% to-white" : "bg-white")}>
                        Gradient border
                    </div>
                </button>
            </div>
            <div className="flex flex-wrap justify-center items-center p-2 md:w-[80%] w-[95%] bg-neutral-200 rounded-b-lg shadow-xl min-h-96">
                {
                    logos.map((key) => (
                        <Image src={`/${key}`} alt={key} width={9999} height={9999} className={clsx("w-auto h-24 mx-8 my-4",activeIndex === 1? "block" : "hidden")}></Image>
                    ))
                }
            </div>
        </div>
    )
}

//<p className={clsx(activeIndex === 1 ? "block" : "hidden")}>bye world!</p>