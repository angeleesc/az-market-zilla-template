import React from 'react'


export default function HeroSwiperSlide({ image, description, productLink }) {
    return (
        <div className="az-hero-swiper-slide" >

            <div className="info-zone">
                <h3>{description}</h3>
                <button>Comprar </button>
            </div>
            <img src={image} alt="xd" />
        </div>
    )
}
