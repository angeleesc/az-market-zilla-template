import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className={`
        px-[60px] py-[20px]
         bg-theme-darck
          flex fl
          [&_ul]:p-0
            [&_a]:text-gray-400
                [&_a]:no-underline
                [&_a]:text-14px
                [&_a]:font-light
                [&_a]:transition-colors
                [&_p]:text-gray-500
                [&_p]:text-[14px]
                [&_li]:my-2
                [&_h6]:text-14px
                [&_h6]:font-medium
                [&_6]:text-white
                [&_h6]:m-0
        `}>

            <div className='w-full flex flex-wrap justify-center md:justify-start' >
                <h3 class="text-white font-sans text-[24px] font-bold w-full">Angel <span class="text-theme-primary">Zilla</span></h3>
                <div className='max-w-[300px] min-w-[200px] grow text-white p-3'>
                    <ul>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>
                                inicio
                            </Link>
                        </li>
                        <li>
                            <h6>telefono</h6>
                            <p>+58 414 378 7747</p>
                        </li>
                        <li>
                            <h6>Direcion</h6>
                            <p>av urdaneta edificion banesco piso 1, oficina 6, Caracas Venezuela</p>
                        </li>
                        <li>
                            <h6>Email</h6>
                            <p>angel@angelzilla.com</p>
                        </li>
                    </ul>
                </div>
                <div className='max-w-[300px] min-w-[200px] grow text-white p-3'>
                    <ul>
                        <li>
                            <h6 className='relative '>
                                Atajos
                            </h6>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>
                                Soperote tecnico
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>
                                Acreca
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>
                                Electrodomesticos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='max-w-[300px] min-w-[200px] grow text-white p-3'>
                    coluna 3
                </div>
                <div className='max-w-[300px] min-w-[200px] grow text-white p-3'>
                    coluna 4
                </div>
            </div>
        </footer>
    )
}
