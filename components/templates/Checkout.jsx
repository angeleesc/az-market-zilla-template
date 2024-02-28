"use client"
import React from 'react'
import CheckoutForm from '../forms/CheckoutForm'

export default function Checkout() {


  return (
    <div className='flex justify-center py-[20px]'>
      <div className='flex-grow flex justify-center'>
        <CheckoutForm />
      </div>
      <div className='flex-grow'>
        seccion de factura
      </div>
    </div>
  )
}
