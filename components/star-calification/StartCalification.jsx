import React from 'react'
import {
  FaStarHalfStroke, FaStar, FaRegStar
} from "react-icons/fa6"

export default function StartCalification({ value }) {

  console.log("valor", value)

  if( value => 0.5 && value < 1) console.log("el producto vale media estrella")

  switch (true) {

    case (value < 0.5):

      break

    case ( value < 1):
      console.log("el producto tine una claificacion de media estrella ", value);
      break

    default:
      console.log("no tiene calificacion aun", value);
      break
  }

  return (
    <div>{value}</div>
  )
}
