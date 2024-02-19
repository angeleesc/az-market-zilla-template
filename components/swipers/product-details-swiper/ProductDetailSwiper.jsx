"use-client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function ProductDetailSwiper({ images, productId }) {
    return (
        <div className='max-w-[600px] h-[300px] md:h-[600px]'>
            <div className='w-full'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}
                    loop
                    navigation={true}

                >
                    {
                        images.map((img, i) => {
                            return <SwiperSlide key={`${productId}-${i}`} className='w-full  h-full flex justify-center'>
                                <div className='w-full h-[600px] flex justify-center items-center'>
                                    <img src={img} alt={`${productId}-${i}`} />
                                </div>
                            </SwiperSlide>

                        })
                    }

                </Swiper>

            </div>



        </div>
    )
}
