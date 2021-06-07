import {
    DECREMENT,
    INCREMENT,
    SET_SCROLL,
    SET_LIST_NUTRITION,
    SET_SAVE_CARD,
    INCREMENT_PROD,
    DECREMENT_PROD,
    SET_SAVED_PROD,
    SET_INCREMENT_CART,
    SET_DICREMENT_CART,
    SET_CITY,
    SET_FLAT,
    SET_FLOOR,
    SET_BLOCK
} from './action'
import {nanoid} from 'nanoid'

const initialState = {
    scroll: false,
    cardsReccomend: [{
            id: nanoid(),
            saved: false,
            count: 0
        },
        {
            id: nanoid(),
            saved: false,
            count: 0
        },
        {
            id: nanoid(),
            saved: false,
            count: 0
        },
        {
            id: nanoid(),
            saved: false,
            count: 0
        },
        {
            id: nanoid(),
            saved: false,
            count: 0
        }
    ],
    cardsProducts: [{
        saved: false,
        count: 0,
        id: nanoid()
    }],
    listNutrition: true,
    cartItems: [],
    totalPrice: 0,
    deliveryAddress: {
        city: '',
        flat: '',
        floor: '',
        block: ''
    }
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL:
            return {
                ...state,
                scroll: action.scroll
            }

        case SET_LIST_NUTRITION:
            return {
                ...state,
                listNutrition: action.view
            }

        case INCREMENT:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems, 
                    {
                        count: action.count,
                        saved:action.saved,
                        id: nanoid(),
                        price: 1.59
                    }
                ],
                cardsReccomend: state.cardsReccomend.map(card => {
                    if (card.id === action.id) {
                        card.count++
                    }
                    return card
                })
            }

        case DECREMENT:
            return {
                ...state,
                cardsReccomend: state.cardsReccomend.map(card => {
                    if (card.id === action.id) {
                        card.count--
                    }
                    return card
                })
            }

        case SET_SAVE_CARD:
            return {
                ...state,
                cardsReccomend: state.cardsReccomend.map(card => {
                    if (card.id === action.id) {
                        card.saved = action.save
                    }
                    return card
                })
            }

        case SET_SAVED_PROD:
            return {
                ...state,
                cardsProducts: state.cardsProducts.map(card => {
                    card.saved = action.save
                    return card
                })
            }

        case INCREMENT_PROD:
            return {
                ...state,
                cardsProducts: state.cardsProducts.map(card => {
                    card.count++
                    return card
                })
            }

            case DECREMENT_PROD:
                return {
                    ...state,
                    cardsProducts: state.cardsProducts.map(card => {
                        card.count--
                        return card
                    })
                }

            case SET_INCREMENT_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => {
                        if (item.id === action.id) item.count++
                        return item
                    })
                }

            case SET_DICREMENT_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => {
                        if (item.id === action.id) item.count--
                        return item
                    })
                }

            case SET_CITY:
                return {
                    ...state,
                    deliveryAddress: {...state.deliveryAddress, city: action.city}
                }    

            case SET_FLAT:
            return {
                ...state,
                deliveryAddress: {...state.deliveryAddress, flat: action.flat}
            } 

            case SET_FLOOR:
                return {
                    ...state,
                    deliveryAddress: {...state.deliveryAddress, floor: action.floor}
                } 

            case SET_BLOCK:
                return {
                    ...state,
                    deliveryAddress: {...state.deliveryAddress, block: action.block}
                }     

            default:
                return state
    }
}