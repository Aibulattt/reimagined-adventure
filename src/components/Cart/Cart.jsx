import React from 'react'
import { Header } from '../Header/Header'
import { Delivery } from './Delivery/Delivery'
import './Cart.scss'
import { Checkout } from './Checkout/Checkout'
import { useScroll } from '../../Hooks/useScroll'

export const Cart = () => {
    useScroll()
    return (
        <section>
            <Header
                title='Cart'
                path='/'
            />
            <div className='container cart-container'>
                <Delivery />
            </div>
            <Checkout />
        </section>
    )
}