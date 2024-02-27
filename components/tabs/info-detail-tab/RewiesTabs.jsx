import React from 'react'

export default function RewiesTabs({ data, productId }) {


  return data.map((review, i) => {
    return <div key={productId + "review" + i}>
      dato
    </div>
  })

}
