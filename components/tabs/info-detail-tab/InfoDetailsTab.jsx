"use client"
import React, { useState } from 'react'
import InfoTabBar from './InfoTabBar'
import "./info-detatils-tab-contianes.scss"
import SpecificationsTab from './SpecificationsTab'
import RewiesTabs from './RewiesTabs'
import InfoTab from './InfoTab'



export default function InfoDetailsTab({ specifications, info, reviews,  productId }) {

  const [currentTab, setcurrentTab] = useState("specifications")

  specifications
  info
  reviews

  


  return (
    <div className='az-details-tabs-container'>
      <InfoTabBar currentOption={currentTab} updateOption={setcurrentTab} />
      {
        currentTab == "specifications" && <SpecificationsTab data={specifications} producId={productId}/>
      }
      {
        currentTab == "info" && <InfoTab data ={info}/>
      }
      {
        currentTab == "reviews" && <RewiesTabs data={reviews}/>
      }

    </div>
  )
}
