import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setSaveCard } from '../../../store/action'
import './Reccomend.scss'
import { ReccomendCard } from './ReccomendCard/ReccomendCard'

export const Reccomend = () => {
    const cards = useSelector(state => state.cardsReccomend)
    const dispatch = useDispatch()
    const handleClickIncrement = (id, count, saved) => {
        dispatch(increment(id, count, saved))
    }
    const handleClickDecrement = (id) => {
        dispatch(decrement(id))
    }

    const saveCard = (saved, id) => {
        if(!saved) dispatch(setSaveCard(true, id))
        else dispatch(setSaveCard(false, id))
    }
    return (
       <section className='reccomend'>
            <h3 className='reccomend__title'>Buy with this product</h3>
            <ul className='reccomend-card__wrapper'>
                {
                 cards.map(card => {
                     return (
                         <li key={card.id}>
                            <ReccomendCard 
                                handleClickIncrement={handleClickIncrement}
                                handleClickDecrement={handleClickDecrement}
                                saveCard={saveCard}
                                id={card.id}
                                count={card.count}
                                saved={card.saved}
                            />
                         </li>
                     )
                 })       
                }
            </ul>
       </section>
    )
}