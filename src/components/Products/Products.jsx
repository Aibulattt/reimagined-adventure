import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useScroll } from '../../Hooks/useScroll'
import { decrementProd, hideListNutrition, incrementProd, setSavedProd } from '../../store/action'
import { Header } from '../Header/Header'
import { CardProducts } from './CardProduct/CardProduct'
import './Products.scss'
import { ProductsInfo } from './ProductsInfo/ProductsInfo'
import { Reccomend } from './Reccomend/Reccomend'

export const Products = () => {
    useScroll()
    const dispatch = useDispatch()
    const listNutrition = useSelector(state => state.listNutrition)
    const cards = useSelector(state => state.cardsProducts)
    const handleClick = () => {
        if (listNutrition) dispatch(hideListNutrition(false))       
        else  dispatch(hideListNutrition(true))
    }
    const setIncrementProd = () => {
        dispatch(incrementProd())
    }

    const setDecrementProd= () => {
        dispatch(decrementProd())
    }

    const setSaveProd = (saved) => {
        if(!saved) dispatch(setSavedProd(true))
        else dispatch(setSavedProd(false))   
    }
    return (
        <section 
            className='products'
        >
            <Header 
                title='Milk & Cheese'
                path='/cart'
            />
            <div className="container products-container">
                {cards.map(card => {
                    return (
                        <CardProducts 
                            key={card.id}
                            setSaveProd={setSaveProd}
                            setDecrementProd={setDecrementProd}
                            setIncrementProd={setIncrementProd}
                            count={card.count}
                            saved={card.saved}
                        />
                    )
                })}
               
                <Reccomend />
                <ProductsInfo 
                    listNutrition={listNutrition}
                    handleClick={handleClick}
                />
            </div>
        </section>
    )
}