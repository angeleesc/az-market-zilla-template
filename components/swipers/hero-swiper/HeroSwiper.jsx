"use client"
import React, { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
import HeroSwiperSlide from './HeroSwiperSlide';
import "./hero-swiper.scss"

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

    // const prevREf = useRef()
    // const nextREf = useRef()
    const swiperRef = useRef(null)

    const handlerPev = useCallback(() => {
        if (!swiperRef.current)
            return
        swiperRef.current.swiper.slidePrev()
    })

    const handlerNext = useCallback(() => {

        if (!swiperRef.current)
            return
        swiperRef.current.swiper.slideNext()

    })

    // slideRef.current.swiper.slidePrev();
    // slideRef.current.swiper.slideNext();

    return (
        <div className='w-full bg-slate-400 h az-hero-swiper'>

            <Swiper
                spaceBetween={50}
                effect='fade'
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: ".az-hero-next",
                    prevEl: ".az-hero-prev",
                }}
                // modules={[Navigation]}
                ref={swiperRef}
                loop
                modules={[EffectFade, Navigation, Pagination]}
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
            <button className='az-hero-prev' onClick={handlerPev} >
                <FaLongArrowAltLeft/>
            </button>
            <button className="az-hero-next" onClick={handlerNext} >
                <FaLongArrowAltRight/>
            </button>
        </div>
    )
}
