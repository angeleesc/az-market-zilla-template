import React, { useState } from 'react'

export default function ShopCounters({ }) {
    const [count, setCount] = useState(1)
    const [readMode, setReadMode] = useState(true)
    return (
        <div className='flex'>
            <button type='button' onClick={()=>setCount(Number(count+1))}>angregar</button>
            <input type="text"
                readOnly={readMode}
                value={count}

                onClick={() => setReadMode(false)}
                onChange={(e) => {
                    setCount(Number(e.target.value))
                }}
                onBlur={() => {
                    if(count < 1) setCount(1)
                    setReadMode(true)
                }}
            />
            <button type='button'
            onClick={()=>{
                if(count <= 1){
                    setCount(1)
                }else{
                    setCount(count-1)
                }
            }}
            >quitar</button>
        </div>
    )
}
