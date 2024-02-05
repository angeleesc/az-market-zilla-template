import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function TopNavbar() {

  const navLeft = "border-l border-l-az-line-acent px-[20px] font-sans text-paragraf-color text-[14px] h-[60px] leading-[60px]"

  return (
    <div
      className='border-b border-az-line-acent'
    >
      <Container>
        <Row>
          <Col md={6} className='md:text-start text-center'  >
            <ul className='m-0 p-0 list-none inline-flex'>
              <li
                className={navLeft}
              >

                +584143787747

              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
