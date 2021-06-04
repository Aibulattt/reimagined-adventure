import React from 'react'
import './RemoveButton.scss'

export const RemoveButton = ({w,h, handleClickDecrement, id}) => {
    return (
        <button 
            style={{
                'width': w,
                'height': h
            }}
            className='removeBtn'
            onClick={() => handleClickDecrement(id)}
        ></button>
    )
}