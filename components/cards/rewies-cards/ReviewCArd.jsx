import StartCalification from '@/components/star-calification/StartCalification'
import React from 'react'
import { FaUser } from "react-icons/fa6"

export default function ReviewCArd({ data, producId }) {

    console.log(data)

    const { idDeUsuario,
        nombreDeUsuario,
        puntuacion,
        review } = data

    console.log(nombreDeUsuario)

    return (
        <div className='bg-gray-50   my-3 p-2 rounded-[16px] flex w-full max-w-[500px]'>
            <div className='w-[80px] h-[80px] bg-gray-200 rounded-[8px] flex justify-center items-center text-[30px] text-theme-primary'>

                <FaUser />

            </div>

            <div className='pl-3 w-full'>
                <div className='flex justify-between w-full'>
                    <h5 className='text-[18px]'>{nombreDeUsuario}</h5>
                    <div className='text-theme-primary text-[18px] w-fu'>
                        <StartCalification value={puntuacion} />
                    </div>
                </div>
                <div className='w-full'>
                    <p className='text-[14px] w-full'>{review}</p>
                </div>
              <div className='flex justify-end m-0 p-0'>
                <p className='m-0 p-0 text-[10px] text-gray-500'>22 ene 2024</p>

              </div>
            </div>

        </div>
    )
}
