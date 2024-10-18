'use client';
import { useTranslations } from "next-intl";
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Outfit } from "next/font/google";
import Image from "next/image";
const contentfont = Outfit({subsets:['latin']})

export default function HomePageCarousel(){
    const reviews = useTranslations('Reviews');
    const empresa = "astros";
    return(
        <div className={`${contentfont.className} w-64 p-4 border-transparent hover:border-gray-200 transition-all shadow-md border-2 rounded-md  `}>
            <div>
                <p className="font-bold text-lg">{reviews(`${empresa}.product`)}</p>
            </div>
            <div className="pb-12 mt-6">
                <p className="font-light text-md">{reviews(`${empresa}.review`)}</p>
            </div>
            <div className="flex flex-row justify-center p-2 items-center">
                <StarIcon className="size-5"></StarIcon>
                <StarIcon className="size-5"></StarIcon>
                <StarIcon className="size-5"></StarIcon>
                <StarIcon className="size-5"></StarIcon>
                <StarIcon className="size-5"></StarIcon>
            </div>
            <div className="flex items-center pl-5">
                <Image alt="atros_logo" src={reviews(`${empresa}.logo`)} width={64} height={64}></Image>
                <p className="pl-5">{reviews(`${empresa}.name`)}</p>
            </div>
        </div>
    )
}