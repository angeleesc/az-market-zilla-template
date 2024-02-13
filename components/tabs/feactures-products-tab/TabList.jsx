import ItemCard from '@/components/cards/Item-card/ItemCard'
import React from 'react'

export default function TabList({ items }) {


    return (
        <div className="container">
            <div className='grid grid-cols-2 mt-5 md:grid-cols-4 mb-[40px]  '>
                {
                    items && items.length && items.map((item) => {
                        return <ItemCard item={item} key={`${item.itemName}`} />
                    })
                }
            </div>
        </div>
    )
}
