
const defaultStateAmountPage = {
    amount_pages: 1
}
const AMOUNT_PAGE = "AMOUNT_PAGE";

export const amountPagesReducer = (state = defaultStateAmountPage, action) => {
    switch (action.type) {
        case AMOUNT_PAGE: 
            return {...state, amount_pages: action.value} 
        default: 
            return state
    }
} 
export const amountPagesAction = (value: number) => ({type: AMOUNT_PAGE, value: value})



