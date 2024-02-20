"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperProductButton() {

    const swiperControl = useSwiper()


    return (
        <>
            <button className='absolute left-0 z-50 az-product-swiper-buttons' onClick={() => swiperControl.slidePrev()}>Anterios</button>
            <button className='absolute right-0 z-50 az-product-swiper-buttons' onClick={() => swiperControl.slideNext()} >Siguiente</button>
        </>
    )
}
