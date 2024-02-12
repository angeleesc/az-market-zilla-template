import React from 'react'
import { Row } from 'react-bootstrap'

export default function FeaturedNavTabBar({ currentTab, updateTab, TabOptions }) {


  return (
    <nav className='container'>
      <Row>
        <ul className='w-full flex justify-center flex-wrap'>



          {/* <li>Samrtphone</li>
      <li>Computer</li>
      <li>Electronic</li>
      <li>TV & Radios</li>
      <li>Camera</li>
      <li>Accesories</li>
      <li></li>
      <li></li> */}

          {
            TabOptions && TabOptions.length && TabOptions.map((tabOption, i) => {
              return (<li key={tabOption}>
                {tabOption}
              </li>)
            })
          }



        </ul>
      </Row>
    </nav>
  )
}
