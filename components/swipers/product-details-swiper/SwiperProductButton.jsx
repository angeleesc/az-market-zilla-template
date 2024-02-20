"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"

export default function SwiperProductButton() {

    const swiperControl = useSwiper()


    return (
        <>
            <button className='absolute left-0 z-50 az-product-swiper-buttons' onClick={() => swiperControl.slidePrev()}>
                <FaArrowLeft />
            </button>
            <button className='absolute right-0 z-50 az-product-swiper-buttons' onClick={() => swiperControl.slideNext()} >
                <FaArrowRight />
            </button>
        </>
    )
}
