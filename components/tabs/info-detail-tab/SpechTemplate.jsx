import React from 'react'


function StringSpechTemplate({ campo, value }) {

    return <div className='grid grid-cols-2'>
        <div>
            <h4 className='text-theme-primary-shadow capitalize text-[16px] font-semibold'>{campo}</h4>
        </div>
        <div>
            <p>{value}</p>
        </div>
    </div>
}

function SubtringTemplate({ campo, value }) {
    return <div className='grid grid-cols-2'>
        <div>
            <h4 className='text-[16px] capitalize text-theme-primary-shadow'>{campo}</h4>
        </div>
        <div>
            <p>
                {
                    value
                }
            </p>
        </div>

    </div>
}

function ArraySpechTemplat({ campo, value }) {

    const longitud = value.length

    // console.log(value)
    return <div className='grid grid-cols-2'>
        <div>
            <h4 className='text-theme-primary capitalize text-[18px] font-semibold'>{campo}</h4>
        </div>
        <div>
            {
                value.toString()
            }
        </div>
    </div>


}

function BoolTemplate({ campo, value }) {

    // console.log("bool template recibio", campo, value)

    return <div className='grid grid-cols-2'>
        <div>
            <h5 className='text-theme-primary-shadow' >{campo}</h5>
        </div>
        <div>
            <p>{value ? "Si" : "No"}</p>
        </div>

    </div>
}

function GerericObjetTemplate({ campo, value }) {

    console.log("el sub objeto recibio", value, campo)
    const keys = Object.keys(value)

    return <div className='grid grid-cols-2'>
        <div>
            <h4 className='text-theme-primary-shadow  capitalize text-[16px]'>
                {campo}
            </h4>
        </div>
        <div>
            <ul className='m-0 p-0'>
                {
                    keys.map((kay, i) => {
                        // eslint-disable-next-line react/jsx-key
                        return <li className='w-full grid grid-cols-2' key={kay+i}>
                            <div>
                                <h6>{kay}</h6>
                            </div>
                            <div>
                                <p>{value[kay]}</p>
                            </div>
                        </li>
                    })
                }

            </ul>
        </div>

    </div>

}

function SubOjetTemplate({ campo, valor }) {


    // console.log("el tipo del sub campo es ", campo, typeof (valor))

    // if (typeof (valor) === "boolean") return <BoolTemplate campo={campo} value={value} />

    if (typeof (valor) === "boolean") return <BoolTemplate campo={campo} value={valor} />
    if (typeof (valor) === "string" || typeof (valor) === "number") return <SubtringTemplate campo={campo} value={valor} />
    if (typeof (valor) === "object") return <GerericObjetTemplate campo={campo} value={valor} />




    return <h4>
        {campo}
    </h4>

}



function ObjetTemplate({ campo, value }) {

    const subObjetKeys = Object.keys(value)


    return <div>
        <h4 className='text-theme-primary capitalize text-[18px] font-semibold text-center p-3 border-b border-gray-600'>{campo}</h4>
        {
            subObjetKeys.map((subCampo, i) => {

                return <React.Fragment key={subCampo}>
                    <SubOjetTemplate campo={subCampo} valor={value[subCampo]} />
                </React.Fragment>


            })
        }

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
