import React from 'react'
import { Header } from '../Header/Header'
import { Delivery } from './Delivery/Delivery'
import './Cart.scss'

export const Cart = () => {
    return (
        <section>
            <Header
                title='Cart'
                path='/'
            />
            <div className='container cart-container'>
                <Delivery />
            </div>
        </section>
    )
}