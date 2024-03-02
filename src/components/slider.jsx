"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperImg from "@/assets/heroImg.png";

const Slider = () => {
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="container mx-auto sliderBg mt-[110px]">
                    <div className="flex items-center justify-center">
                        <Image className={"max-h-[600px]"} src={SwiperImg} alt="Img" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container mx-auto sliderBg mt-[110px]">
                    <div className="flex items-center justify-center">
                        <Image className={"max-h-[600px]"} src={SwiperImg} alt="Img" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container mx-auto sliderBg mt-[110px]">
                    <div className="flex items-center justify-center">
                        <Image className={"max-h-[600px]"} src={SwiperImg} alt="Img" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container mx-auto sliderBg mt-[110px]">
                    <div className="flex items-center justify-center">
                        <Image className={"max-h-[600px]"} src={SwiperImg} alt="Img" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider