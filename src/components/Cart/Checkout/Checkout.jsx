import React from 'react'
import './Checkout.scss'

export const Checkout = () => {
    return (
        <div className='checkout'>
            <ul className='checkout__list'>
                <li>
                    <span className='checkout-speed'></span>
                </li>
                <li className='checkout__list-item'>
                    <p className='checkout__list-item-key'>Delivery:</p>
                    <p className='checkout__list-item-value'>25-30 min</p>
                </li>
                <li className='checkout__list-item'>
                    <p className='checkout__list-item-key'>Total:</p>
                    <p className='checkout__list-item-value'>£ 150.99</p>
                </li>
                <li className='checkout__list-item'>
                    <button className='checkout__btn'>Checkout</button>
                </li>
            </ul>
        </div>
    )
}