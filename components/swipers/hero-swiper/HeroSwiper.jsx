"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
import HeroSwiperSlide from './HeroSwiperSlide';
import "./hero-swiper.scss"
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade
} from "swiper";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const tempImgSwiper = [


    {
        img: "/images/hero2.jpg",
        message: "Ve los nuevos telefonos de samsung",

    },

    {
        img: "/images/hero1.webp",
        message: "Disponibles las apple vision pro",

    },
    {
        img: "/images/hero3.jpg",
        message: "Asipira lo inaspirable con la nueva roboct aspiradora"
    }

]


export default function HeroSwiper() {

    const prevREf = useRef()
    const nextREf = useRef()

    return (
        <div className='w-full bg-slate-400 h az-hero-swiper'>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: ".az-hero-next",
                    prevEl: ".az-hero-prev",
                }}
                // modules={[Navigation]}
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
            <button className='az-hero-prev' >Anterios</button>
            <button className="az-hero-next"  >siguiente</button>
        </div>
    )
}
