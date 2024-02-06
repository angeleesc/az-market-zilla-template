import MiddleBar from '@/components/middleBar/MiddleBar'
import TopNavbar from '@/components/top-narbar/TopNavbar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <div className="az-navbar-area">
            <TopNavbar/>
            <MiddleBar/> 
        </div>
        {children}
        
        </div>
  )
}
