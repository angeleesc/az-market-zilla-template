import React from 'react'


function StringSpechTemplate({ key, value }) {

    return <div className='grid grid-cols-2'>
        <div>
            <h4>{key}</h4>
        </div>
        <div>
            <p>{value}</p>
        </div>

    </div>
}

export default function SubObjetTemplate({ ObjetData, campo }) {


    console.log(ObjetData)
    console.log(campo, "xd")

    if (typeof (ObjetData) === "string" || typeof (ObjetData) === "number") {
        return <>
            <StringSpechTemplate key={campo} value={ObjetData} />
        </>
    }


    return (
        <div>SubobjetTemplate</div>
    )
}
