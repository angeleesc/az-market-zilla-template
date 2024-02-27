"use client"
import React, { useEffect, useRef } from 'react'

export default function InfoTab({productId, data}) {

  const boxRef = useRef()
  useEffect(()=>{
    if(boxRef.current){
      boxRef.current.innerHTML = data
    }

  boxRef.current=null
  })


  return (
    <div ref={boxRef} className='info-section'> 
    
    </div>
  )
}
