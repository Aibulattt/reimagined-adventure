import React from 'react'
import './ProductsInfo.scss'

export const ProductsInfo = ({ handleClick, listNutrition }) => {
    const classBtnList = listNutrition ? 'products__info-openBtn' : 'products__info-closeBtn'
    const classList = listNutrition ? 'nutrition__list-consist' : 'nutrition__list-hide'
    return (
        <section className='products-info'>
            <article className='nutrition' id='nutrition'>
                <h3 className='nutrition__title'>Nutrition</h3>
                <p className='nutrition__description'>
                    Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus</b>. Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus.</b>
                </p>
                <ul className='nutrition__list'>
                    <li className='nutrition__list-item'>
                        <p className='nutrition__list-text'>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li className='nutrition__list-item'>
                        <p className='nutrition__list-text'>Consectetur adipiscing elit</p>
                    </li>
                    <li className='nutrition__list-item'>
                        <p className='nutrition__list-text'>Ultrices at egestas tempus </p>
                    </li>
                    <li className='nutrition__list-item'>
                        <p className='nutrition__list-text'>Duis egestas semper dolor morbi purus.</p>
                    </li>
                </ul>

                <ul className={classList}>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>28</p>
                        <span className='list-consist__sub'>Kkal.</span>
                        <span>
                            <span className='list-consist__proc'>4% RI</span>
                            <span className='list-consist__ft'>Low</span>
                        </span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>1.3 g</p>
                        <span className='list-consist__sub'>Proteins</span>
                        <span className='list-consist__proc'>10% RI</span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>0 g</p>
                        <span className='list-consist__sub'>Fats</span>
                        <span className='list-consist__proc'>12% RI</span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>28</p>
                        <span className='list-consist__sub'>Сarbs</span>
                        <span className='list-consist__proc'>10% RI</span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>6,4 mg</p>
                        <span className='list-consist__sub'>Niacin</span>
                        <span className='list-consist__proc'>40% RI</span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>0,8 g</p>
                        <span className='list-consist__sub'>Vitamin B6</span>
                        <span className='list-consist__proc'>57% RI</span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>0 g</p>
                        <span className='list-consist__sub'>Fats</span>
                        <span className='list-consist__proc'>12% RI</span>
                    </li>
                    <li className='list-consist__item'>
                        <p className='list-consist__weight'>28</p>
                        <span className='list-consist__sub'>Сarbs</span>
                        <span className='list-consist__proc'>10% RI</span>
                    </li>
                </ul>

                <button
                    onClick={handleClick}
                    className={classBtnList}
                >
                    {listNutrition ? 'Hide' : 'More'}
                </button>
            </article>

            <article className='ingridient' id='ingridient'>
                <h3 className='ingridient__title'>Ingridients</h3>
                <p className='ingridient__description'>
                    Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus.</b>
                </p>
            </article>

            <article className='other' id="other">
                <h3 className='other__title'>Other</h3>
                <ul className="other__list">
                    <li className="other__list-item">
                        <p className='list-item__key'>Страна производства</p>
                        <p className='list-item__value'>Россия</p>
                    </li>
                    <li className="other__list-item">
                        <p className='list-item__key'>Состав</p>
                        <p className='list-item__value'>цельное молоко</p>
                    </li>
                    <li className="other__list-item">
                        <p className='list-item__key'>Срок годности</p>
                        <p className='list-item__value'>12 дн.</p>
                    </li>
                    <li className="other__list-item">
                        <p className='list-item__key'>Изготовитель</p>
                        <p className='list-item__value'>ОАО "Компания "Юнимилк"</p>
                    </li>
                    <li className="other__list-item">
                        <p className='list-item__key'>Жирность</p>
                        <p className='list-item__value'>4.5 %</p>
                    </li>
                    <li className="other__list-item">
                        <p className='list-item__key'>Содержание лактозы</p>
                        <p className='list-item__value'>обычное (более 1% лактозы)</p>
                    </li>
                    <li className="other__list-item">
                        <p className='list-item__key'>
                            Витаминизированное обогащенное</p>
                        <p className='list-item__value'>нет</p>
                    </li>
                </ul>
            </article>
        </section>
    )
}