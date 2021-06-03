import React from 'react'
import './AddButton.scss'

export const AddButton = ({text, w, h, id}) => {
    const handleClick = () => {
        console.log(id)
    }
    return (
        <button 
            className='buttonAdd'
            onClick={handleClick}
            style={{'width': w, 'height': h}}
        >
            {text || ''}
        </button>
    )
}