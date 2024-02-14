import ItemCard from '@/components/cards/Item-card/ItemCard'
import React from 'react'

export default function TabList({ items }) {


    return (
     
    <div className='max-w-[1500px] m-auto p-8 flex justify-center'>
                <div className='az-pruduct-tab-list'>
                {
                    items && items.length && items.map((item) => {
                        return <ItemCard item={item} key={`${item.itemName}`} />
                    })
                }
            </div>
    </div>

    )
}
