'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePageCarousel(){

    return(
        <div>
            <Carousel>
                <div>
                    <p>Hello World!</p>
                </div>
                <div>
                    <p>Hello Earth!</p>
                </div>
            </Carousel>
        </div>
    )
}