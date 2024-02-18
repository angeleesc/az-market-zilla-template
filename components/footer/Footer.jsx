import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className={`
        px-[60px] py-[20px]
         bg-theme-darck
          flex flex-wrap 
          justify-center 
          md:justify-start
          [&_ul]:p-0
            [&_a]:text-gray-400
                [&_a]:no-underline
                [&_a]:hover:text-theme-primary
                [&_a]:text-14px
                [&_a]:transition-colors
                [&_p]:text-gray-500
                [&_p]:text-[14px]
                [&_li]:my-2
                [&_h6]:text-14px
                [&_h6]:font-medium
                [&_6]:text-white
                [&_h6]:m-0
        `}>
            <div className='max-w-[300px] min-w-[200px] grow text-white '>
                <h3 class="text-white font-sans text-[24px] font-bold">Angel <span class="text-theme-primary">Zilla</span></h3>
                <ul>
                    <li>
                        <Link href={"/"}>
                            inicio
                        </Link>
                    </li>
                    <li>
                        <h6>Direcion</h6>
                        <p>Direccionde la tienda</p>
                    </li>
                </ul>
            </div>
            <div className='max-w-[300px] min-w-[200px] grow text-white '>
                coluna 2
            </div>
            <div className='max-w-[300px] min-w-[200px] grow text-white '>
                coluna 3
            </div>
            <div className='max-w-[300px] min-w-[200px] grow text-white '>
                coluna 4
            </div>
        </footer>
    )
}
