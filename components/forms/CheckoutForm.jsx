import React from 'react'
import { useForm } from 'react-hook-form'
import "./form-zone.scss"
import ChekoutPaymetOptions from './ChekoutPaymetOptions'
import { FaCcVisa, FaCcMastercard, } from "react-icons/fa6"
import { SiAmericanexpress } from "react-icons/si"
import CvvIcons from '../icons/CvvIcons'

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
            <div className='w-full mt-3 flex' >
                <div className='az-form-controls my-2 flex-grow ml-1' >
                    <label>
                        <span>Fecha de Expiracio *</span>
                        <input type="text" {...register("OwnerCard")} />
                    </label>
                </div>
                <div className='az-form-controls my-2 flex-grow ml-1' >
                    <label>
                        <span> CVC *</span>
                        <div className='flex relative items-center'>
                            <input className='pr-8 w-full' type="text" {...register("cvc")} />
                            <div className='absolute right-2'>
                                <CvvIcons />
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <div className='w-full mt-3' >
                <div className='az-form-controls my-2 flex-grow ml-1' >
                    <label>
                        <span>Direcion de la tarjeta *</span>
                        <input type="text" {...register("direction")} />
                    </label>
                </div>
            </div>

            <button className='w-full mt-5 p-3 bg-theme-primary text-white rounded-[16px] hover:bg-theme-primary-shadow' >
                Pagar
            </button>

        </form>
    )
}
