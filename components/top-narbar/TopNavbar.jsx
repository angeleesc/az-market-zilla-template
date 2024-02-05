import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhone, FaCrosshairs } from "react-icons/fa"
import { FaLocationDot, FaUser } from "react-icons/fa6"
export default function TopNavbar() {

  const topBarLeft = "border-l  az-line-acent px-[20px] font-sans text-paragraf-color text-[14px] h-[60px] leading-[60px]"
  const topBarRight = "border-r   az-line-acent px-[20px] font-sans text-paragraf-color text-[14px] h-[60px] leading-[60px]"

  return (
    <div
      className='border-b border-az-line-acent'
    >
      <Container>
        <Row>
          <Col md={6} className='md:text-start text-center'  >
            <ul className='m-0 p-0 list-none inline-flex'>
              <li
                className={topBarLeft}
              >

                <p className='p-0 flex items-center'>
                  <i className='mr-[5px]' >
                    <FaPhone />
                  </i>+58 414 378 7747

                </p>
              </li>
              <li
                className={topBarLeft}
              >

                <p className='p-0 flex items-center'>
                  <i className='mr-[5px]' >
                    <FaLocationDot />
                  </i>store location

                </p>
              </li>
              <li
                className={topBarLeft}
              >

                <p className='p-0 flex items-center'>
                  <i className='mr-[5px]' >
                    <FaCrosshairs />
                  </i>Track your order

                </p>
              </li>
            </ul>
          </Col>

          <Col md={6} className='md:text-end text-center' >

            <ul
              className='m-0 p-0 list-none inline-flex  md:float-right'
            >

              <li className={topBarRight} >
                <p className='p-0 flex items-center' >
                  <i className='mr-5'>
                    <FaUser/>
                  </i>
                  My account
                </p>
              </li>
              <li className={topBarRight} >
                <p className='p-0 flex items-center' >
                  <i className='mr-5'>
                    <FaUser/>
                  </i>
                  Help
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
