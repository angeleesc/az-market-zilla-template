import React from 'react'

export default function SecctionTitle({ title, subTitle }) {
    return (
        <>
            <h3 className='text-[24px] text-gray-800 mt-5 text-center' >{
                title
            }</h3>
            <h4 className='text-[18px] mb-5 text-gray-500 text-center' >
                {subTitle}
            </h4>
        </>
    )
}
