// export const initialState = {
//     // stockData: []
//     ...stockState
// }

// export const reducer  = (state, action) => {
//     // switch(action.type){
//     //     case 'YOUR_ACTION_HERE': // ?
//     //         return {}  // ?
//     //     break;
        
//     // }
//     state = stockReducer(state, action)
//     return state
// }


import { stockReducer, stockState } from "./stockReducer"

export const initialState = {
    ...stockState
}

export const reducer  = (state, action) => {
    state = stockReducer(state, action)
    return state
}