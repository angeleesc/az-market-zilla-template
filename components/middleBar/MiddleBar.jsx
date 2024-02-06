import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../search-bar/SearchBar'

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
                    <Col lg={3}>
                        <div className='text-right'>
                            <ul className='list-none p-0 m-0' ></ul>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
