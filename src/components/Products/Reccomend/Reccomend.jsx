import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../../../store/action'
import './Reccomend.scss'
import { ReccomendCard } from './ReccomendCard/ReccomendCard'

export const Reccomend = () => {
    const cards = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const handleClick = (id) => {
        console.log(id);
        dispatch(addCount(id))
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
                                handleClick={handleClick}
                                id={card.id}
                                count={card.count}
                            />
                         </li>
                     )
                 })       
                }
            </ul>
       </section>
    )
}