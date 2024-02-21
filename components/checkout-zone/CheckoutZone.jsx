import React from 'react'
import './checkout-zone.scss'
import StartCalification from '../star-calification/StartCalification'
import ShopCounters from '../counters/shop-counters/ShopCounters'

export default function CheckoutZone({ productId, title, price, offerPrice, calification }) {
    return (
        <>
            <h3>{title}</h3>

            {
                price && offerPrice ?
                    <h4>
                        <span className='font-semibold'>   {offerPrice}$ </span><del className='text-gray-500 text-[20px]'> {price}$ </del>
                    </h4> : price ? <div>
                        {price}
                    </div> : null
            }

            <div className='flex items-center'>
                <div className='my-[20px] text-theme-primary text-[20px] flex'>
                    <StartCalification value={calification} />

                </div>
                <div className='ml-2 flex items-center'>
                    <p className='m-0 p-0' >(20 rewies)</p>
                </div>

            </div>
            <ShopCounters />
            <div className='my-5 text-[24px]'>
                <h4 className='text-[14px]'>
                    Selecionar Color
                </h4>
                <ul className={`
            flex
            m-[0px]
            p-[0px]
            justify-start
            [&_li]:block
            [&_li]:w-5
            [&_li]:h-5
            [&_li]:rounded
            [&_li]:mx-3
            az-color-picker
            `}> <li
                        className='bg-orange-500      '
                    ></li>
                    <li className='bg-yellow-400'></li>
                    <li className='bg-green-500'></li>
                    <li className='bg-blue-600' ></li>
                    <li className='bg-red-500'></li> </ul>
            </div>
            <button className='w-[180px] h-[50px] flex justify-center items-center text-white bg-theme-primary transition-colors hover:bg-theme-primary-shadow '>
                <p className='p-0 m-0'>Agregar al carrito</p>
            </button>

        </>
    )
}
