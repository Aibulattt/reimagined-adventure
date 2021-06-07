import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIncrementCart, setDecrementCart, setCity, setFlat, setFloor, setBlock } from '../../../store/action'
import { CardItem } from './CardItem/CardItem'
import './Delivery.scss'

export const Delivery = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    const deliveryAddress = useSelector(state => state.deliveryAddress)
    const classInputFlat = deliveryAddress.flat ? 'input-nonempty' : ''
    const classInputFloor = deliveryAddress.floor ? 'input-nonempty' : ''
    const classInputBlock = deliveryAddress.block ? 'input-nonempty' : ''
    const handleClickIncrement = (id) => {
        dispatch(setIncrementCart(id))
    }
    const handleClickDicrement = (id) => {
        dispatch(setDecrementCart(id))
    }

    const onCity = (ev) => {
        dispatch(setCity(ev.target.value))
    }

    const onFlat = (flat) => {
        dispatch(setFlat(flat))
    }

    const onFloor = (floor) => {
        dispatch(setFloor(floor))
    }

    const onBlock = (block) => {
        dispatch(setBlock(block))
    }
    let total 
    return (
        <section className='cart-delivery'>
            <article className='delivery'>
                <h2 className='delivery__card-title'>Delivery address</h2>
                <button className='delivery__card-btn'></button>
                <form className='delivery__card-form'>
                    <input
                        className={`card-form__input input-sity`}
                        onChange={onCity} 
                        value={deliveryAddress.city} 
                        type="text" 
                    />
                    <div className='input-item'>
                        <input
                            className={`card-form__input ${classInputFlat}`}
                            value={deliveryAddress.flat} 
                            onChange={(ev) => onFlat(ev.target.value)} 
                            id='flat' 
                            name='flat' 
                            type="number"
                        />
                        <label className='card-form__label' htmlFor="flat">Flat</label>
                    </div>
                    <div className='input-item'>
                        <input
                            className={`card-form__input ${classInputFloor}`}
                            value={deliveryAddress.floor} 
                            onChange={(ev) => onFloor(ev.target.value)} 
                            id='Floor' 
                            name='Floor' 
                            type="number" 
                        />
                        <label className='card-form__label' htmlFor="Floor">Floor</label>
                    </div>
                    <div className='input-item'>
                        <input
                            className={`card-form__input ${classInputBlock}`}
                            name='Block' 
                            value={deliveryAddress.block} 
                            onChange={(ev) => onBlock(ev.target.value)} 
                            id='Block' 
                            type="text" 
                        />
                        <label className='card-form__label' htmlFor="Block">Block</label>
                    </div>
                </form>
                <h2 className='cart-items__title'>{cartItems.length} items</h2>
                <ul>
                    {cartItems.map(item => {
                        total = cartItems.reduce((total, item) => total + item.price, 0) + 0.4  
                        total = total.toFixed(2) 
                        return (
                            <li key={item.id}>
                                <CardItem 
                                    id={item.id}
                                    count={item.count}
                                    setIncrementCart={handleClickIncrement}
                                    handleClickDicrement={handleClickDicrement}
                                />
                            </li>
                        )
                    })}
                </ul>
            </article>
            <article className='payment'>
                <h2 className='payment__title'>Payment</h2>
                <input className='payment__promo' placeholder='GHYU907H' type="text"/>
                <ul className='payment__list'>
                    <li className='payment__list-item'>
                        <p className='payment-list-item__key'>Order:</p>
                        <p className='payment-list-item__value'>{Math.round(total) || ''}</p>
                    </li>
                    <li className='payment__list-item'>
                        <p className='payment-list-item__key'>Delivery</p>
                        <p className='payment-list-item__value'>£ 0,4 </p>
                    </li>
                    <li className='payment__list-item'>
                        <p className='payment-list-item__key color-red'>Promocode</p>
                        <p className='payment-list-item__value color-red'>0</p>
                    </li>
                    <li className='payment__list-item'>
                        <p className='payment-list-item__key'>Total</p>
                        <p className='payment-list-item__value'>{total ? `£ ${total}` : ''}</p>
                    </li>
                </ul>
            </article>
        </section>
    )
}