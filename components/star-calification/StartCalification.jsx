import React from 'react'
import {
  FaStarHalfStroke, FaStar, FaRegStar
} from "react-icons/fa6"

export default function StartCalification({ value }) {

  console.log("valor", value)

  if (value => 0.5 && value < 1) console.log("el producto vale media estrella")

  switch (true) {

    case (value >= 5):
      return <div className='w-full flex justify-start'>

        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

      </div>
    case (value >= 4.5):
      return <div className='w-full flex justify-start'>

        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>

    case (value >= 4):
      return <div className='w-full flex justify-start' >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>

    case (value >= 3.5):
      return <div className='w-full flex justify-start' >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
        <FaRegStar />
      </div>

    case (value >= 3):
      return <div className='w-full flex justify-start' >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </div>

    case (value >= 2.5):
      return <div className='w-full flex justify-start'>
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
      </div>

    case (value >= 2):
      return <div className='w-full flex justify-start'>
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>

    case (value >= 1.5):
      return <div className='w-full flex justify-start'>
        <FaStar />
        <FaStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />

      </div>

    case (value >= 1):
      return <div className='w-full flex justify-start'>
        <FaStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    case (value >= 0.5):
      return <div className='w-full flex justify-start' >
        <FaStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    default:
      return <div className='w-full flex justify-center'>
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>




  }

  return (
    <div>{value}</div>
  )
}
