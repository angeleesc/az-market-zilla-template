import React from 'react'
import SubObjetTemplate from './SubobjetTemplate'

export default function SpecificationsTab({ data , producId }) {

    const notSpecialCaracterREgEx = /[^a-zA-Z0-9 ]/g


    if (data) {

        const Campo = Object.keys(data)

        return Campo.map(()=>{})
            
                  
    }

    return <div>
        <h4>seccion de especificacio</h4>
    </div>
}