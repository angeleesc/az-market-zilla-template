import ReviewCArd from '@/components/cards/rewies-cards/ReviewCArd'
import React from 'react'

export default function RewiesTabs({ data, productId }) {


  return<div className='flex flex-col items-center'>
    {
       data.map((review, i) => {
        return <ReviewCArd key={productId + "review" + i } data={review} producId={productId} />
      })
    }
  </div>

}
