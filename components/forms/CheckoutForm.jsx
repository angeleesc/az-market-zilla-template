import React from 'react'
import { useForm } from 'react-hook-form'
import "./form-zone.scss"
import ChekoutPaymetOptions from './ChekoutPaymetOptions'
import { FaCcVisa, FaCcMastercard, } from "react-icons/fa6"
import { SiAmericanexpress } from "react-icons/si"

export default function CheckoutForm() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            paymentmethod: "card"
        }
    })

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
            <ChekoutPaymetOptions register={register("paymentmethod")} current={chekoutPaymetnOption} />

            <h3>
                Datos de la tarjeta
            </h3>

            <div className='az-form-controls  my-2 mt-5' >
                <label>
                    <span>Numero de la tajeta *</span>
                    <div className='input-card'>
                        <input type="text" {...register("email")} />
                        <div className="az-icon-card-zone">
                            <span>
                                <FaCcVisa />
                            </span>
                            <span>
                                <FaCcMastercard />
                            </span>
                            <span>
                                <SiAmericanexpress />
                            </span>

                        </div>
                    </div>
                </label>
            </div>

        </form>
    )
}
