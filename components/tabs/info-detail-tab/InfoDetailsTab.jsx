"use client"
import React, { useState } from 'react'
import InfoTabBar from './InfoTabBar'
import "./info-detatils-tab-contianes.scss"



export default function InfoDetailsTab({specifications, info, reviews}) {

const [currentTab, setcurrentTab] = useState("specifications")
    

  return (
    <div className='az-details-tabs-container'>
        <InfoTabBar currentOption={currentTab} updateOption={setcurrentTab}/>
        {
          
        }
        
    </div>
  )
}
