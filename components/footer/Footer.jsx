import Link from 'next/link'
import React from 'react'
import { FaXTwitter, FaFacebook, FaInstagram, FaPinterest, FaPaypal, FaApplePay, FaGooglePay, FaAmazonPay,  } from "react-icons/fa6"
import {SiPayoneer} from "react-icons/si"
import { RiVisaLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className={`
        px-[60px] py-[20px]
         bg-theme-darck
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
                <h3 className="text-white font-sans text-[24px] font-bold w-full">Angel <span className="text-theme-primary">Zilla</span></h3>
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
                                trabaja con nosotro
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='max-w-[300px] min-w-[200px] grow text-white p-3'>
                    <ul>
                        <li>
                            <h6>
                                Categorias
                            </h6>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>Electrodomestico</Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>Audio</Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>video</Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>Deportes</Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary'>Celulares & tablet</Link>
                        </li>
                    </ul>
                </div>
                <div className='max-w-[300px] min-w-[200px] grow text-white p-3'>

                    <ul>
                        <li>
                            <h6>Ususario</h6>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                Mi perfil
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                Soporte
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                Personal
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                Mis pedidos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between flex-wrap w-full' >

                <div className='p-3'>
                    <h6 className='text-white'>Redes Sociales</h6>
                    <ul className='flex flex-wrap mt-2 [&_a]:text-[18px]'>
                        <li className='ml-0 mr-3'>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaFacebook />
                            </Link>
                        </li>
                        <li className='mx-3'>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaXTwitter />
                            </Link>
                        </li>
                        <li className='mx-3'>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaInstagram />
                            </Link>
                        </li>
                        <li className='ml-3 mr-0'>
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaPinterest />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className='text-white'>Medios de pago</h6>
                    <ul className='flex flex-wrap mt-2 [&_a]:text-[18px]'>
                        <li className='ml-0 mr-3 ' >
                            <Link href={"/"} className='hover:text-theme-primary'>
                                <SiPayoneer/>
                            </Link>
                        </li>
                        <li className='mx-3' >
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaAmazonPay/>
                            </Link>
                        </li>
                        <li className='mx-3' >
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaGooglePay/>
                            </Link>
                        </li>
                        <li className='mx-3' >
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <FaPaypal/>
                            </Link>
                        </li>
                        <li className='mr-0 ml-3' >
                            <Link href={"/"} className='hover:text-theme-primary' >
                                <RiVisaLine/>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='w-full bg-gray-700 h-[1px] mx-3' ></div>
        <div className='w-full flex justify-center my-3'>
        <p>@AngelZTemplate - 2024 All Right Reserved</p>
        </div>
        </footer>
    )
}
