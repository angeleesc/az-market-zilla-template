import React from 'react'

export default function SpecificationsTab({ data }) {

    const notSpecialCaracterREgEx = /[^a-zA-Z0-9 ]/g


    if (data) {


        // si hay datos hay que harmalo en base al tipo de datos

        const keys = Object.keys(data)
        console.log(keys)

        return <>

            {
                keys.map((key, i) => {
                    console.log(typeof (data[key]))

                    if (typeof (data[key]) === "string" || typeof (data[key]) === "number") {
                        return <div className='grid grid-cols-2'>
                            <div><h5 className='capitalize  text-theme-primary' >{key.replace(notSpecialCaracterREgEx, ' ')}</h5></div>
                            <div>{data[key]}</div>
                        </div>
                    }

                    if (typeof (data[key]) === "object") {



                        if (Array.isArray(data[key])) {

                            const size = data[key].length

                            return <div className='grid grid-cols-2'>
                                <div>
                                    <h5 className='capitalize text-theme-primary border-gray-400'>{key.replace(notSpecialCaracterREgEx, " ")}</h5>
                                </div>
                                <div>
                                    <p>
                                        {data[key].map((campo, i) => i === size - 1 ? `${campo}` : `${campo}, `)}
                                    </p>
                                </div>

                            </div>

                        }


                        

                        const sperObjetDat = data[key]
                        for (let llave in sperObjetDat) {
                            console.log(llave)
                            console.log(sperObjetDat[llave])
                        }

                        return <h4>objeto</h4>



                    }

                    return <div className='' key={"spech" + i}>
                        dato X
                    </div>
                })
            }

        </>
    }

    return <div>
        <h4>seccion de especificacio</h4>
    </div>
}