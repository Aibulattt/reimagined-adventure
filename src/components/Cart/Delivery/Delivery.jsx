import React from 'react'
import { CardItem } from './CardItem/CardItem'
import './Delivery.scss'

export const Delivery = () => {
    return (
        <section className='cart-delivery'>
            <article className='delivery'>
            <h2 className='delivery__card-title'>Delivery address</h2>
            <button className='delivery__card-btn'></button>
            <form className='delivery__card-form'>
                <input className='card-form__input input-sity' type="text" />
                <div className='input-item'>
                    <input className='card-form__input' id='flat' name='flat' type="number" />
                    <label className='card-form__label' htmlFor="flat">Flat</label>
                </div>
                <div className='input-item'>
                    <input className='card-form__input' id='Floor' name='Floor' type="number" />
                    <label className='card-form__label' htmlFor="Floor">Floor</label>
                </div>
                <div className='input-item'>
                    <input className='card-form__input' name='Block' id='Block' type="text" />
                    <label className='card-form__label' htmlFor="Block">Block</label>
                </div>
            </form>
        </article>
        <article className='cart-items'>
            <h2 className='cart-items__title'>2 items</h2>
            <CardItem />
        </article>
        </section>
    )
}