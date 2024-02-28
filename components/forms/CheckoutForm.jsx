import React from 'react'
import { useForm } from 'react-hook-form'

export default function CheckoutForm() {

    const { register, handleSubmit, formState:{errors} } = useForm()

    return (
        <form action="" className='bg-slate-50 w-full max-w-[650px] p-4'>
            <h3 className='text-gray-800 text-[24px]'>Datos de facturacion</h3>
        </form>
    )
}
