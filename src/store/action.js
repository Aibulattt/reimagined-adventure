export const SET_SCROLL = 'SET_SCROLL'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET_LIST_NUTRITION = 'SET_LIST_NUTRITION'
export const SET_SAVE_CARD = 'SET_SAVE_CARD'
export const INCREMENT_PROD = 'INCREMENT_PROD'
export const DECREMENT_PROD = 'DECREMENT_PROD'
export const SET_SAVED_PROD = 'SET_SAVED_PROD'
export const SET_INCREMENT_CART = 'SET_INCREMENT_CART'
export const SET_DICREMENT_CART = 'SET_DICREMENT_CART'
export const SET_CITY = 'SET_CITY'
export const SET_FLAT = 'SET_FLAT'
export const SET_FLOOR = 'SET_FLOOR'
export const SET_BLOCK = 'SET_BLOCK'

export const setScroll = (scroll) => ({
    type: SET_SCROLL, 
    scroll
})

//--------------------------------

export const increment = (id, count, saved) => ({
    type: INCREMENT,
    id, 
    count,
    saved
})

export const decrement = (id) => ({
    type: DECREMENT,
    id
})

//----------------------------

export const hideListNutrition = (view) => ({
    type: SET_LIST_NUTRITION,
    view
})

//---------------------------------------------

export const setSaveCard = (save, id) => ({
    type: SET_SAVE_CARD,
    save,
    id
})

//--------------------------------------------------

export const incrementProd = () => ({
    type: INCREMENT_PROD
})

export const decrementProd = () => ({
    type: DECREMENT_PROD
})

//------------------------------------------

export const setSavedProd = (save) => ({
    type: SET_SAVED_PROD,
    save
})

//----------------------------------------

export const setIncrementCart = (id) => ({
    type: SET_INCREMENT_CART,
    id
})

export const setDecrementCart = (id) => ({
    type: SET_DICREMENT_CART,
    id
})

//-------------------

export const setCity = (city) => ({
    type: SET_CITY,
    city
})

export const setFlat = (flat) => ({
    type: SET_FLAT,
    flat
})

export const setFloor = (floor) => ({
    type: SET_FLOOR,
    floor
})

export const setBlock = (block) => ({
    type: SET_BLOCK,
    block
})