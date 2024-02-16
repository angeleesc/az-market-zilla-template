import React, { useEffect, useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ItemCard from '@/components/cards/Item-card/ItemCard';


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

  useEffect(()=>{})

  return (
    <div className='px-[60px] mx-6 relative'>
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
                ref={swiperRef}
                loop
                modules={[ Navigation, Pagination]}
            >

            {
              topTredingProducs.map((product, i)=>{

              return  <SwiperSlide key={`${sectionId}-${i}`}>
                <ItemCard item={product}/>
              </SwiperSlide>

              })
            }


            </Swiper>
      
    </div>
  )
}
