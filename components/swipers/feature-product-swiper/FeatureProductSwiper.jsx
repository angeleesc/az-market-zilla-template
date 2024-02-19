"use client"
import React, { useCallback, useEffect, useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ItemCard from '@/components/cards/Item-card/ItemCard';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import "./featured-products-swiper.scss"
import 'swiper/css';

const topTredingProducs = [
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending1.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending1.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending2.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending3.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending4.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending5.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending6.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending7.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending8.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending9.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
  {
    itemName: "partybox jbl",
    thumnails: "/images/swipertrending10.webp",
    value: 4.5,
    itemAddedInCart: false,
    itemLiked: false,
    category: "Audio",
    price: 580.25

},
]

export default function FeatureProductSwiper({sectionId}) {

  const  swiperRef = useRef(null)

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

  useEffect(()=>{})

  return (
    <div className='px-[60px] my-6 relative  az-products-swiper'>
        <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: ".az-hero-next",
                    prevEl: ".az-hero-prev",
                }}
                // modules={[Navigation]}
                ref={swiperRef}
                loop
                modules={[ Navigation, Pagination]}
                breakpoints={
                  {
                    500:{
                      slidesPerView: 1
                    },
                    800:{
                      slidesPerView: 2
                    },
                    1200:{
                      slidesPerView: 3
                    },
                    1400:{
                      slidesPerView: 4
                    },
                    1600:{
                      slidesPerView: 5
                    },
                    1800:{
                      slidesPerView: 6,
                      width:1800
                    }
                  }
                }
            >

            {
              topTredingProducs.map((product, i)=>{

              return  <SwiperSlide key={`${sectionId}-${i}`}>
                <ItemCard item={product}/>
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
