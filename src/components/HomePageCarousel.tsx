'use client';
import { useTranslations } from "next-intl";
import { StarIcon } from "@heroicons/react/24/outline";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const contentfont = Outfit({subsets:['latin']})
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};


export default function HomePageCarousel(){
    const reviews = useTranslations('Reviews');
    const companies = ["astros","flecha","freestyle"]//corresponds to reviews section of messages


    function testCarouselItem(){
        const empresa = "astros";
        return(
            <div className={`${contentfont.className} mx-4 w-[90w] md:w-96 p-4 border-transparent hover:border-gray-200 transition-all shadow-md border-2 rounded-md  `}>
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
                <div className="flex items-center">
                    <Image className="rounded-[50%]" alt="atros_logo" src={reviews(`${empresa}.logo`)} width={64} height={64}></Image>
                    <p className="pl-5 text-md">{reviews(`${empresa}.name`)}</p>
                </div>
            </div>      
        )
    }
    
    return(
        <div className="py-16">
            <Carousel infinite={true}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
            {
                companies.map((c) => (
                    <div key={c} className={`${contentfont.className} mx-4 w-[90w] md:w-96 p-4 border-transparent hover:border-gray-200 transition-all shadow-md border-2 rounded-md  `}>
                        <div>
                            <p className="font-bold text-lg">{reviews(`${c}.product`)}</p>
                        </div>
                        <div className="pb-12 mt-6">
                            <p className="font-light text-md">{reviews(`${c}.review`)}</p>
                        </div>
                        <div className="flex flex-row justify-center p-2 items-center">
                            <StarIcon className="size-5"></StarIcon>
                            <StarIcon className="size-5"></StarIcon>
                            <StarIcon className="size-5"></StarIcon>
                            <StarIcon className="size-5"></StarIcon>
                            <StarIcon className="size-5"></StarIcon>
                        </div>
                        <div className="flex items-center">
                            <Image className="rounded-[50%]" alt="atros_logo" src={reviews(`${c}.logo`)} width={64} height={64}></Image>
                            <p className="pl-5 text-md">{reviews(`${c}.name`)}</p>
                        </div>
                    </div> 
                ))
            }   
            </Carousel>
        </div>
    )
}