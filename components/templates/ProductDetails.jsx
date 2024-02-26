"use client"
import React from 'react'
import ProductDetailSwiper from '../swipers/product-details-swiper/ProductDetailSwiper'
import CheckoutZone from '../checkout-zone/CheckoutZone'
import InfoDetailsTab from '../tabs/info-detail-tab/InfoDetailsTab'

const images = [
    "/images/product-details-1.jpg",
    "/images/product-details-2.jpg",
    "/images/product-details-3.jpg",
    "/images/product-details-4.jpg",
    "/images/product-details-5.jpg",
    "/images/product-details-6.jpg",
    "/images/product-details-7.jpg",
    "/images/product-details-8.jpg",
    "/images/product-details-9.jpg",
]

const spech = {
    "modelo": "Samsung Galaxy Tab S9",
    "pantalla": {
        "tamaño": "11 pulgadas",
        "resolución": "2560 x 1600 píxeles",
        "tecnología": "Super AMOLED",
        "densidad de píxeles": "276 ppi"
    },
    "procesador": {
        "marca": "Qualcomm",
        "modelo": "Snapdragon 8 Gen 2",
        "núcleos": "Octa-core",
        "velocidad": "Hasta 3.0 GHz"
    },
    "memoria": {
        "RAM": "8 GB",
        "almacenamiento interno": "128 GB / 256 GB / 512 GB",
        "ampliable mediante microSD": true,
        "capacidad máxima de expansión": "1 TB"
    },
    "cámara": {
        "principal": {
            "resolución": "13 MP",
            "apertura": "f/1.9"
        },
        "frontal": {
            "resolución": "8 MP",
            "apertura": "f/2.0"
        }
    },
    "batería": {
        "capacidad": "8000 mAh",
        "carga rápida": true,
        "carga inalámbrica": true
    },
    "sistema operativo": "Android 12 con One UI 4.0",
    "dimensiones": {
        "alto": "28.8 cm",
        "ancho": "18.5 cm",
        "grosor": "6.3 mm",
        "peso": "575 g"
    },
    "colores": ["Negro", "Plateado", "Verde", "Oro"]
}

const description = `
<div>
  <h2>Aspectos más destacados del Samsung Galaxy Tab S9</h2>
  <ul>
    <li><strong>Pantalla Impresionante:</strong> Con una pantalla de 11 pulgadas Super AMOLED y una resolución de 2560 x 1600 píxeles.</li>
    <li><strong>Potente Rendimiento:</strong> Equipado con un procesador Qualcomm Snapdragon 8 Gen 2 Octa-core y 8 GB de RAM.</li>
    <li><strong>Amplio Almacenamiento:</strong> Con opciones de almacenamiento interno de 128 GB, 256 GB o 512 GB, ampliables hasta 1 TB mediante tarjeta microSD.</li>
    <li><strong>Cámaras de Alta Calidad:</strong> La cámara principal de 13 MP y la cámara frontal de 8 MP permiten capturar fotos y videos de alta calidad.</li>
    <li><strong>Batería de Larga Duración:</strong> Con una batería de 8000 mAh y admite carga rápida e inalámbrica.</li>
    <li><strong>Diseño Elegante:</strong> Con un diseño delgado de 6.3 mm de grosor y disponible en una variedad de colores modernos.</li>
  </ul>
</div>
`

const reviews  = [
    { "idDeUsuario": "1a2b3c", "nombreDeUsuario": "Ana", "puntuacion": 4.5, "review": "Excelente tablet, gran rendimiento." },
    { "idDeUsuario": "4d5e6f", "nombreDeUsuario": "Juan", "puntuacion": 4.8, "review": "Muy contento con la calidad de la pantalla." },
    { "idDeUsuario": "7g8h9i", "nombreDeUsuario": "María", "puntuacion": 4.3, "review": "Batería de larga duración, perfecta para viajes." },
    { "idDeUsuario": "j1k2l3", "nombreDeUsuario": "Carlos", "puntuacion": 4.7, "review": "Diseño elegante y cómodo de sostener." },
    { "idDeUsuario": "m4n5o6", "nombreDeUsuario": "Laura", "puntuacion": 4.2, "review": "Buena relación calidad-precio." },
    { "idDeUsuario": "p7q8r9", "nombreDeUsuario": "Pedro", "puntuacion": 4.6, "review": "Rápido y potente, ideal para trabajo y entretenimiento." },
    { "idDeUsuario": "s1t2u3", "nombreDeUsuario": "Sofía", "puntuacion": 4.9, "review": "La mejor tablet que he tenido." },
    { "idDeUsuario": "v4w5x6", "nombreDeUsuario": "Elena", "puntuacion": 4.5, "review": "La cámara toma fotos increíbles." },
    { "idDeUsuario": "y7z8a9", "nombreDeUsuario": "David", "puntuacion": 4.4, "review": "Fácil de configurar y usar." },
    { "idDeUsuario": "b1c2d3", "nombreDeUsuario": "Lucía", "puntuacion": 4.7, "review": "Gran capacidad de almacenamiento, puedo llevar todos mis archivos." }
]

export default function ProductDetails() {
    return (
        <>
            <div className='flex flex-wrap justify-center items-center min-h-[600px]   my-3 px-[60px]'>

                <div className='flex-grow min-w-[300px]'>
                    <ProductDetailSwiper images={images} productId={"galaxy-tab"} />
                </div>
                <div className='flex-grow min-w-[300px]'>
                    <CheckoutZone productId={"galaxy-tab"} title={"Galaxy tab s10"} calification={3} price={35.6} offerPrice={30.0} />
                </div>

            </div>
            <InfoDetailsTab specifications={spech} info={description} reviews={reviews} productId={"galaxy-tab"}/>
        </>
    )
}