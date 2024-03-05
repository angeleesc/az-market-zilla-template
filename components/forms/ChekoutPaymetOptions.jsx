import React from 'react'
import { SiZelle } from "react-icons/si";
import { FaPaypal } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";


export default function ChekoutPaymetOptions({ register, current, option }) {


    console.log("el metodo actual es ", current)

    return (

        <div className=' az-chekout-payment-option mt-4'>
            <p>forma de pago</p>
            <div className='flex flex-wrap w-full '>
                <label className='az-chekout-payment-radio'>
                    <input value={"card"}  type="radio" checked={current==="card"} {...register} />
                    <span>
                        <h6>Tarjeta</h6>
                        <span className='icon'>
                            <FaCreditCard/>
                        </span>
                    </span>
                </label>
                <label className='az-chekout-payment-radio'>
                    <input value={"paypal"} type="radio" checked={current ==="paypal"}  {...register} />
                    <span>
                        <h6>
                            Paypal
                        </h6>
                        <span className="icon">
                            <FaPaypal/>
                        </span>
                    </span>
                </label>
                <label className='az-chekout-payment-radio'>
                    <input value={"zelle"} type="radio" className='pr-[100px]' checked={current === "zelle"} {...register} />
                    <span>
                        <h6>Zelle</h6>
                        <span className="icon">
                            <SiZelle/>
                        </span>
                    </span>
                </label>

            </div>

        </div>
    )
}
