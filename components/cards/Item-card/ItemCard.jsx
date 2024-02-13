import React from 'react'

export default function ItemCard({ item }) {
    return (
        <div className='w-full h-[400px] border-gray-400 border'>
        {
            item.thumnails? <div className='h-[235px] p-2'>
                <img src={item.thumnails} alt={`${item.itemName} thumnails`}  className='w-full h-full object-cover' />

            </div>: <div>
                <h3>No hay imagen</h3>
            </div>
        }
        </div>
    )
}
