import React from 'react'

export default function InfoTabBar({ currentOption, updateOption }) {

    // specifications, info, reviews

    return (
        <nav className={
            `flex
        justify-center
        items-stretch
        h-[60px]
        w-full
        az-info-tab-bar`
        }>
            <ul className='flex p-0 m-0'>
                <li><button className={`${currentOption === "specifications" && "info-tab-obtion-active"}`}
                onClick={()=>updateOption("specifications")}
                >Especificaciones</button></li>
                <li><button 
                className={`${currentOption === "info" && "info-tab-obtion-active"}`}
                onClick={()=>updateOption("info")}
                >Imformacion</button></li>
                <li><button 
                onClick={()=>updateOption("reviews")}
                className={`${currentOption === "reviews" && "info-tab-obtion-active"}`}>Calificaciones</button></li>
            </ul>
        </nav>
    )
}
