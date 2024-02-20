"use client"
import React from 'react'
import ProductDetailSwiper from '../swipers/product-details-swiper/ProductDetailSwiper'
import CheckoutZone from '../checkout-zone/CheckoutZone'

const images = [
    "/images/product-details-1.jpg",
    "/images/product-details-2.jpg",
    "/images/product-details-3.jpg",
    "/images/product-details-4.jpg",
    "/images/product-details-5.jpg",
    "/images/product-details-6.jpg",
    "/images/product-details-7.jpg",
    "/images/product-details-8.jpg",
    "/images/product-details-9.jpg",
]

export default function ProductDetails() {
    return (
        <>
            <div className='flex flex-wrap justify-center min-h-[600px]  my-3 px-[60px]'>

                <div className='flex-grow min-w-[300px]'>
                    <ProductDetailSwiper images={images} productId={"galaxy-tab"} />
                </div>
                <div className='flex-grow min-w-[300px]'>
                    <CheckoutZone productId={"galaxy-tab"} title={"Galaxy tab s10"} calification={3}/>
                </div>

            </div>
        </>
    )
}