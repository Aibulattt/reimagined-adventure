import React from 'react'
import './CardItem.scss'
import { RemoveButton } from '../../../RemoveButton/RemoveButton'

export const CardItem = () => {
    return (
        <div className='card-item'>
            <img className='card-item__img' src="../../../../../img/img3.png" alt="image of product"/>
            <div className="card-item__text">
                <p className='card-item__description'>Best-in 10 British Big Eggs...</p>
                <span className='card-item__price'>£ 1,59 </span>
                <span className='card-item__priceofProd'>· 1 pc / £1.59</span>
            </div>
            <div>
                <RemoveButton />

                <button className='btnAdd'>

                </button>
            </div>
        </div>
    )
}