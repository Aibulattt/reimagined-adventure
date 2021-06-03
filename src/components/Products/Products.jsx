import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setScrollOff, setScrollOn } from '../../store/action'
import { Header } from '../Header/Header'
import { CardProducts } from './CardProduct/CardProduct'
import './Products.scss'
import { ProductsInfo } from './ProductsInfo/ProductsInfo'
import { Reccomend } from './Reccomend/Reccomend'

export const Products = () => {
    const dispatch = useDispatch()

    const handleScroll = () => {
        if (window.scrollY > 70) dispatch(setScrollOn(true))
        else dispatch(setScrollOff(false)) 
      }

      useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
      }, [])
    return (
        <section 
            className='products'
        >
            <Header 
                title='Milk & Cheese'
                path='/cart'
            />
            <div className="container products-container">
                <CardProducts />
                <Reccomend />
                <ProductsInfo />
            </div>
        </section>
    )
}