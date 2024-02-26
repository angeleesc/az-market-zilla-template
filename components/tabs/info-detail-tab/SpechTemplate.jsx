import React from 'react'


function StringSpechTemplate({ campo, value }) {

    return <div className='grid grid-cols-2'>
        <div>
            <h4 className='text-theme-primary text-[18px] font-semibold'>{campo}</h4>
        </div>
        <div>
            <p>{value}</p>
        </div>
    </div>
}

function ArraySpechTemplat(campo, value) {
    return <div>
        <h4>es un array</h4>
    </div>


}
function ObjetTemplate({ campo, value }) {
    return <div>
        <h4>Es un objeto</h4>
    </div>
}

export default function SpechTemplate({ ObjetData, campo }) {

    // console.log(typeof(ObjetData))
    if (typeof (ObjetData) === "string" || typeof (ObjetData) === "number") return <StringSpechTemplate campo={campo} value={ObjetData} />
    if (typeof (ObjetData) === "object" && Array.isArray(ObjetData)) return <ArraySpechTemplat campo={campo} value={ObjetData} />
    if (typeof (ObjetData) === "object") return <  ObjetTemplate campo={campo} value={ObjetData} />

    return (
        <div>SpechTemplate XD</div>
    )
}
