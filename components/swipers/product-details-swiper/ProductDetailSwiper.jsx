"use-client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"
import { EffectFade, Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './product-swiper.scss'
import SwiperProductButton from './SwiperProductButton';

export default function ProductDetailSwiper({ images, productId }) {

    const [activeThumbs, setActiveThumbs] = useState()


    return (
        <div className='max-w-[600px] min-h-[600px]'>
       
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log("swiper clix")}
                    modules={[Navigation, A11y, Pagination, Thumbs]}
                    loop
                    // navigation={true}
                    className='az-product-details-swiper'
                    thumbs={{
                         swiper: activeThumbs
                    }}

                >
                    {
                        images.map((img, i) => {
                            return <SwiperSlide key={`${productId}-${i}`} className='w-full  h-full flex justify-center '>
                                <div className='w-full h-[600px] flex justify-center items-center rounded'>
                                    <img src={img} alt={`${productId}-${i}`} className='rounded-[16px]' />
                                </div>
                            </SwiperSlide>

                        })
                    }
                    <SwiperProductButton />
                </Swiper>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={setActiveThumbs}

                    modules={[Navigation, A11y, Pagination, Thumbs]}
                    loop
                    // navigation={true}
                    className='az-product-details-swiper-thumnails'

                >
                    {
                        images.map((img, i) => {
                            return <SwiperSlide key={`${productId}-${i}`} className=''>
                                <div className='w-full h-[60px]  flex justify-center items-center  p-1 hover:cursor-pointer hover:opacity-80'>
                                    <img src={img} alt={`${productId}-${i}`} className=' h-full'  />
                                </div>
                            </SwiperSlide>

                        })
                    }
                </Swiper>

                
                

            



        </div>
    )
}
