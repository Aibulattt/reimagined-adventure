import React from 'react'
import { RemoveButton } from '../../../RemoveButton/RemoveButton'
import './ReccomendCard.scss'

export const ReccomendCard = ({ id, count, handleClickIncrement, handleClickDecrement,saveCard, saved }) => {
    const classBtnCount = count ? 'paddingnone' : 'buttonAdd'
    const classBtnSave = saved ? 'reccom__Nosave' : 'reccom__save'
    return (
        <div className='reccom__card'>
            <button 
                onClick={() => saveCard(saved, id)}
                className={classBtnSave}>
            </button>
            <img src="../../../../../img/img2.png" alt="" />
            <p className='reccom__card-desc'>Best-in 10 British Big Eggs</p>
            <span className='reccom__card-priceofProd'>1 pc / £1.59</span>
            <div className='reccom__card-control'>
                <p className='reccom__card-price'>£1.59</p>
                <div className='reccom__card-countblock'>
                    {count ? (
                            <>
                                <RemoveButton 
                                    id={id}
                                    handleClickDecrement={handleClickDecrement}
                                    w={24} h={24} 
                                />
                                <span className='countprod'>{count}</span>
                            </>
                        ) : ''
                    }
                    <button
                        onClick={() => handleClickIncrement(id, count, saved)}
                        className={classBtnCount}
                    >
                        {!count && 'Add'}
                    </button>
                </div>
            </div>
        </div>
    )
}