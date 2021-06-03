import React from 'react'
import { useDispatch } from 'react-redux'
import { addCount } from '../../../../store/action'
import './ReccomendCard.scss'

export const ReccomendCard = ({id, count, handleClick}) => {
    const dispatch = useDispatch()
    return (
        <div className='reccom__card'>
            <button className='reccom__save'></button>
            <img src="../../../../../img/img2.png" alt=""/>
            <p className='reccom__card-desc'>Best-in 10 British Big Eggs</p>
            <span className='reccom__card-priceofProd'>1 pc / £1.59</span>
            <div className='reccom__card-control'>
                <p className='reccom__card-price'>£1.59</p>
                <button 
                    onClick={() => handleClick(id)}
                    className='buttonAdd'
                >
                    { count || 'Add' }
                </button>
            </div>
        </div>
    )
}