import {SET_COUNT, SET_SCROLLOFF, SET_SCROLLON} from './action'
import {nanoid} from 'nanoid'

const initialState = {
    skroll: false,
    cards: [
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
        },
        {
            id: nanoid(),
            saved: false,
            count: 0
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLLON:
            return {
                ...state,
                scroll: action.scroll
            }
        case SET_SCROLLOFF:
            return {
                ...state,
                scroll: action.scroll
            }
        case SET_COUNT: 
            return {
                ...state,
                cards: state.cards.map(card => {
                    if(card.id === action.id) {
                        console.log('ee');
                        card.count+1
                    }
                })
            }    

        default:
            return state
    }
}