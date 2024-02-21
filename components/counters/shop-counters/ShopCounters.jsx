import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6"

export default function ShopCounters({ }) {
    const [count, setCount] = useState(1)
    const [readMode, setReadMode] = useState(true)

    const addCount = () => setCount(Number(count + 1))
    const subtractionCount = () => {
        if (count <= 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className='flex h-[40px] items-stretch'>
            <button type='button'
                className={`
                w-[50px]
                h-full
                transition-colors
                border
                border-gray-500
                flex
                justify-center
                items-center
                hover:bg-theme-primary
                hover:text-white
                rounded-s-[8px]
                `}

                onClick={addCount}>
                <FaPlus />
            </button>
            <input type="text"
                className={
                    `
                px-3
                py-1
                max-w-[100px]
                outline-none
                border
                border-gray-500
                h-full  
                
                `

                }
                readOnly={readMode}
                value={count}

                onClick={() => setReadMode(false)}
                onChange={(e) => {
                    setCount(Number(e.target.value))
                }}
                onBlur={() => {
                    if (count < 1) setCount(1)
                    setReadMode(true)
                }}
            />
            <button type='button'
                className={`
            w-[50px]
            h-full
            transition-colors
            border
            border-gray-500
            flex
            justify-center
            items-center
            
            hover:bg-theme-primary
                hover:text-white
                rounded-e-[8px]
            `}
                onClick={subtractionCount}
            >

                <FaMinus />
            </button>
        </div>
    )
}
