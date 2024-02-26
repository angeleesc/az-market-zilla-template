import React from 'react'
import SubObjetTemplate from './SubobjetTemplate'

export default function SpecificationsTab({ data, producId }) {

    const notSpecialCaracterREgEx = /[^a-zA-Z0-9 ]/g


    if (data) {

        const Campo = Object.keys(data)

        return Campo.map((campo, i) => {
            return <React.Fragment key={producId+"pesch"+i}>
                <SubObjetTemplate ObjetData={data[campo]} campo = {campo} />
            </React.Fragment>
        })


    }

    return <div>
        <h4>seccion de especificacio</h4>
    </div>
}