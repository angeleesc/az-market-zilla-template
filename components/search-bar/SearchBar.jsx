import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <form
            className='rounded-[50px] bg-gray-200 relative flex'

        >

            <input type="text" className='h-[50px] focus:outline-none w-[100%] bg-gray-200 rounded-[50px] pl-4' />
            <button type='button' className='bg-theme-primary w-[80px] h-[50px] rounded-[50px] leading-[50px] text-center hover:bg-theme-primary-tins'>
                <i className='text-center text-gray-200 w-[100%] flex justify-center'>
                    <FaSearch />
                </i>
            </button>
        </form>
    )
}
