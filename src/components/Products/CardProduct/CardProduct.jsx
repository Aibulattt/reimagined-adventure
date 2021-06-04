import React from 'react'
import { RemoveButton } from '../../RemoveButton/RemoveButton'
import './CardProducts.scss'

export const CardProducts = ({count, saved, setIncrementProd, setDecrementProd, setSaveProd}) => {
    const classBtnIncrement = count ? 'paddingnone' : 'buttonAdd'
    const classBtnSave = saved ? 'card__btn-Nosave' : 'card__btn-save'
    return (
        <div className='card'>
            <button 
                onClick={() => setSaveProd(saved)}
                className={classBtnSave}>
            </button>
            <ul className='card__list'>
                <li className='card__list-item'></li>
                <li className='card__list-item'></li>
                <li className='card__list-item'></li>
                <li className='card__list-item'>+3</li>
            </ul>
            <img src="../../../../img/img.png" alt="milk image"/>
            <p className='card__description-prod'>Just Milk Semi-Skimmed 6 x 1L (Case of 2)</p>
            <span className='card__priceofProd'>1 pc / £1.59</span>
            <div className='card__control'>
                <p className='card__control-price'>£1.59</p>
                <div className='card__control-btn'>
                    {count ? (
                        <>
                            <RemoveButton handleClickDecrement={setDecrementProd} w={38} h={38}/>
                            <span className='card__count'>{count}</span>
                        </>
                        ) : ''
                    }
                    
                    <button 
                        onClick={setIncrementProd}
                        className={classBtnIncrement}
                    >
                        {!count && 'Add'}
                    </button>
                </div>
            </div>
            <ul className='card__list-links'>
                <li className='list-links__item'>
                    <a className='list-links__link' href="#nutrition">Nutrition</a>
                </li>
                <li className='list-links__item'>
                    <a className='list-links__link' href="#ingridient">Ingredients</a>
                </li>
                <li className='list-links__item'>
                    <a className='list-links__link' href="#other">Other</a>
                </li>
            </ul>
        </div>
    )
}