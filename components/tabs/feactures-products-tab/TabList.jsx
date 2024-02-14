import ItemCard from '@/components/cards/Item-card/ItemCard'
import React from 'react'

export default function TabList({ items }) {


    return (
     
            <div className='az-pruduct-tab-list'>
                {
                    items && items.length && items.map((item) => {
                        return <ItemCard item={item} key={`${item.itemName}`} />
                    })
                }
            </div>

    )
}
