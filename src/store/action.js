export const SET_SCROLLON = 'SET_SCROLLON'
export const SET_SCROLLOFF = 'SET_SCROLLOFF'
export const SET_COUNT = 'SET_COUNT'

export const setScrollOn = (scroll) => ({
    type: SET_SCROLLON, 
    scroll
})

export const setScrollOff = (scroll) => ({
    type: SET_SCROLLOFF,
    scroll
})

export const addCount = (id) => ({
    type: SET_COUNT,
    id
})