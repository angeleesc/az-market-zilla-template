import React from 'react'

export default function ChekoutPaymetOptions({ register, current, option }) {
    return (
        <div className='flex flex-wrap az-chekout-payment-option'>
            forma de pago
            <label className=''>
                <span>Tarjeta</span>
                <input value={"card"}  type="radio" {...register} />
            </label>
            <label>
                <span>Paypal</span>
                <input value={"paypal"} type="radio" {...register} />
            </label>
            <label>
                <span>Zinli</span>
                <input value={"paypal"} type="radio" {...register} />
            </label>
        </div>
    )
}
