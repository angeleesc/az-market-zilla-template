"use client"
import BottonNavBAr from '@/components/botton-bar/BottonNavBAr'
import Footer from '@/components/footer/Footer'
import MiddleBar from '@/components/middleBar/MiddleBar'
import TopNavbar from '@/components/top-narbar/TopNavbar'
import React from 'react'


export default function Layout({ children }) {
  return (
    <div>
      <div className="az-navbar-area">
        <TopNavbar />
        <MiddleBar />
        {/* <BottonNavBAr/> */}
      </div>
      {children}
      <Footer />
    </div >
  )
}
