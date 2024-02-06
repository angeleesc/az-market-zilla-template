import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../search-bar/SearchBar'
import {FaRegHeart, FaCartShopping} from "react-icons/fa6"

export default function MiddleBar() {
    return (
        <div className='py-[30px] bg-gray-300 hidden md:block' >
            <Container>
                <Row>
                    <Col md={2} >
                        <div className='outline-none '>
                            <Link href={"/login"} className='no-underline' >
                                <h3 className='text-gray-900 font-sans text-[32px] font-bold'  >
                                    Angel <span className='text-theme-primary' >Zilla</span>
                                </h3>
                            </Link>
                        </div>
                    </Col>
                    <Col md={7}className='text-center' >
                        <SearchBar/>
                    </Col>
                    <Col lg={3} className='flex items-center justify-end'>
                        <div className='text-right '>
                            <ul className='list-none p-0 m-0 inline-flex' >

                                <li className='mx-[10px] font-bold relative text-[18px]' >
                                    <Link href={"/"} className='no-underline text-gray-500' >
                                        <FaRegHeart />
                                        <span className='absolute top-[-15px] right-[-15px] bg-theme-primary text-[12px] p-[2px] rounded-full text-gray-50' >9+</span>
                                    </Link>
                                </li>
                                <li className='mx-[10px] font-bold relative text-[18px]' >
                                    <Link href={"/"} className='no-underline text-gray-500' >
                                        <FaCartShopping />
                                        <span className='absolute top-[-15px] right-[-15px] bg-theme-primary text-[12px] p-[2px] rounded-full text-gray-50' >9+</span>
                                    </Link>
                                </li>
                                <li className='mx-[10px] font-bold relative text-[18px]' >
                                    <Link href={"/"} className='no-underline text-gray-500' >
                                    155.65$
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
