import React from 'react'
import SpechTemplate from './SpechTemplate'

export default function SpecificationsTab({ data, producId }) {


    if (data) {

        const Campo = Object.keys(data)
        

        return Campo.map((campo, i) => {
            return <React.Fragment key={producId+"pesch"+i}>
                <SpechTemplate ObjetData={data[campo]} campo = {campo} />
            </React.Fragment>
        })


    }

    return <div>
        <h4>seccion de especificacio</h4>
    </div>
}