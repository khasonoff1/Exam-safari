"use client"

import Image from "next/image";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperImg from "@/assets/heroImg.png";

SwiperCore.use([Pagination, A11y, Autoplay]);

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="container mx-auto sliderBg relative">
                    <div className="flex items-center justify-center">
                        <Image className="max-h-screen" src={SwiperImg} alt="img" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container mx-auto sliderBg relative">
                    <div className="flex items-center justify-center">
                        <Image className="max-h-screen" src={SwiperImg} alt="img" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container mx-auto sliderBg relative">
                    <div className="flex items-center justify-center">
                        <Image className="max-h-screen" src={SwiperImg} alt="img" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container mx-auto sliderBg relative">
                    <div className="flex items-center justify-center">
                        <Image className="max-h-screen" src={SwiperImg} alt="img" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;
