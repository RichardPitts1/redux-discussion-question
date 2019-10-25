export const stockState = {
    stockData: []
}

export const stockReducer = (state, action) => {
    switch(action.type){
        case 'EXAMPLE_ACTION':
            return {

            }
        break;
        case 'NEW_DATA':
            return {
                ...state,
                stockData: [
                    ...state.stockData,
                    action.point
                ]
            }
        break;
    }
    return state
}