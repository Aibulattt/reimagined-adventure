import React from 'react'
import './RemoveButton.scss'

export const RemoveButton = () => {
    const handleClick = () => {
        console.log('remove Click')
    }
    return (
        <button 
            className='removeBtn'
            onClick={handleClick}
        ></button>
    )
}