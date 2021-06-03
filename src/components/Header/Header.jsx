import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Header.scss'

export const Header = ({title, path}) => {
    const history = useHistory()
    const scroll = useSelector(state => state.scroll)

    const handleClick = () => {
        history.push(path)
    }

    const headerClass = scroll ? 'headerScroll' : 'header'

    return (
       <header className={headerClass}>
            <button 
                className='header__btn'
                onClick={handleClick}
            ></button>
            <h2 className='header__title'>{title}</h2>
       </header>
    )
}