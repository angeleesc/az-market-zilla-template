
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSwiperSlide from './HeroSwiperSlide';

const tempImgSwiper = [
   

    {
        img: "/images/hero2.jpg",
        message: "Ve los nuevos telefonos de samsung",

    },

    {
        img: "/images/hero1.webp",
        message: "Disponibles las apple vision pro",

    },

]


export default function HeroSwiper() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {
                tempImgSwiper.map((img, i) => {
                    return <SwiperSlide key={`hero-image-${i}`}>
                        {/* {`ejemplo ${i}`} */}
                        <HeroSwiperSlide image={img.img} description={img.message} />

                    </SwiperSlide>

                })
            }

        </Swiper>
    )
}
