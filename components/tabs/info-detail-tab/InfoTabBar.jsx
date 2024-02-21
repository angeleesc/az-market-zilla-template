import React from 'react'

export default function InfoTabBar({ currentOption, updateOption }) {
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
                <li><button>Especificaciones</button></li>
                <li><button>Imformacion</button></li>
                <li><button>Calificaciones</button></li>
            </ul>
        </nav>
    )
}
