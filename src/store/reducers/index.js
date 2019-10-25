import { stockReducer, stockState } from "./stockReducer"

export const initialState = {
    ...stockState
}

export const reducer  = (state, action) => {
    state = stockReducer(state, action)
    return state
}