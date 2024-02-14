import React from 'react'

export default function ItemCard({ item }) {
    return (
        <div className='w-full max-w-[300px] min-w-[250px] h-[400px] border-gray-400 border'>
            {
                item.thumnails ? <div className='h-[235px] p-2 w-full flex justify-center'>
                    <img src={item.thumnails} alt={`${item.itemName} thumnails`} className='h-full' />

                </div> : <div>
                    <h3>No hay imagen</h3>
                </div>
            }

            <div className='p-4'>
                {

                    item.category && <h4 className='text-[14px] text-gray-400'>{item.category}</h4>
                }

                {
                    <h4 className='text-[18px] text-gray-900 font-bold'>{item.itemName}</h4>
                }

            </div>
        </div>
    )
}
