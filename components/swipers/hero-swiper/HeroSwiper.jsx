
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSwiperSlide from './HeroSwiperSlide';

const tempImgSwiper = [

    {
        img: "https://res.cloudinary.com/angelplayxd/image/upload/v1707251471/este-sera-precio-samsung-galaxy-s24-seran-mas-baratos-esperado_98_du0dl7.webp",
        message: "Ve los nuevos telefonos de samsung",

    },

    {
        img: "https://res.cloudinary.com/angelplayxd/image/upload/v1707251471/Apple-WWCD23-Vision-Pro-EyeSight-230605.jpg.large_2x_i0ey2p.jpg",
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
                        {`ejemplo ${i}`}
                    </SwiperSlide>

                })
            }

        </Swiper>
    )
}
