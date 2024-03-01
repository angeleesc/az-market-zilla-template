import React from 'react'
import { useForm } from 'react-hook-form'
import "./form-zone.scss"
import ChekoutPaymetOptions from './ChekoutPaymetOptions'

export default function CheckoutForm() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const chekoutPaymetnOption = watch("paymentmethod")

    console.log(chekoutPaymetnOption)

    return (
        <form action="" className=' w-full max-w-[650px] p-4 az-from-zone'>
            <h3 className=''>Datos de facturacion</h3>

            <div className='az-form-controls my-2 mt-5' >
                <label>
                    <span>Email *</span>
                    <input type="text" {...register("email")} />
                </label>
            </div>
            <div className='flex'>
                <div className='az-form-controls my-2 flex-grow ml-1' >
                    <label>
                        <span> nombre *</span>
                        <input type="text" {...register("nobre")} />
                    </label>
                </div>
                <div className='az-form-controls my-2 flex-grow ml-2' >
                    <label>
                        <span> apellido *</span>
                        <input type="text" {...register("apellido ")} />
                    </label>
                </div>


            </div>
            <h3>Datos de pago</h3>
            <ChekoutPaymetOptions register={register("paymentmethod")} />



        </form>
    )
}
