import StartCalification from '@/components/star-calification/StartCalification'
import React from 'react'
// import { FaCartShopping } from "react-icons/fa6"
import { PiShoppingCart } from "react-icons/pi"

export default function ItemCard({ item }) {
    return (
        <div className=' h-[400px] border-gray-400 border relative'>
            {
                item.thumnails ? <div className='h-[235px] p-2 w-full flex justify-center'>
                    <img src={item.thumnails} alt={`${item.itemName} thumnails`} className='h-full' />

                </div> : <div>
                    <h3>No hay imagen</h3>
                </div>
            }

            <div className='p-4'>
                {

                    item.category && <h4 className='text-[14px] text-gray-400 font-normal'>{item.category}</h4>
                }

                {
                    <h4 className='text-[16px] text-gray-900 font-medium'>{item.itemName}</h4>
                }

            </div>

            <div className='absolute bottom-1 left-0 px-4 py-2 w-full' >
                {
                    item.value && <div className='text-theme-primary text-[16px]'>
                        <StartCalification value={item.value} />
                    </div>
                }
                {
                    item.price && <div className='w-full flex justify-between mt-2'>

                        <h4 className='text-[20px]'>{item.price} $</h4>
                        <button className={`
                        text-[20px] 
                        px-4 py-2 
                        rounded-full 
                        border 
                        transition-color 
                        duration-500 
                        hover:bg-theme-primary
                        hover:text-white
                        `}>
                            <PiShoppingCart />
                        </button>

                    </div>
                }
            </div>

        </div>
    )
}
