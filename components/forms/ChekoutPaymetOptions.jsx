import React from 'react'

export default function ChekoutPaymetOptions({ register, current, option }) {
    return (
        <div className=' az-chekout-payment-option'>
            forma de pago
            <div className='flex flex-wrap w-full'>
                <label className='az-chekout-payment-radio'>
                    <input value={"card"} type="radio" {...register} />
                    <span>Tarjeta</span>
                </label>
                <label className='az-chekout-payment-radio'>
                    <input value={"paypal"} type="radio" {...register} />
                    <span>Paypal</span>
                </label>
                <label className='az-chekout-payment-radio'>
                    <input value={"paypal"} type="radio" {...register} />
                    <span>Zinli</span>
                </label>

            </div>

        </div>
    )
}
