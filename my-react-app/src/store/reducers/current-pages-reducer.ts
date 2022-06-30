
const defaultStateCurrentPage = {
    page: 1
}

const NEXT_PAGE = "NEXT_PAGE";
const PREVIOUS_PAGE = "PREVIOUS_PAGE"
const CURRENT_PAGE_FIRST = "CURRENT_PAGE_FIRST"

export const currentPageReducer = (state = defaultStateCurrentPage, action) => {
    switch (action.type) {
        case NEXT_PAGE: 
            return {...state, page: state.page + action.value} 
        case PREVIOUS_PAGE: 
            return {...state, page: state.page - action.value}
        case CURRENT_PAGE_FIRST:
            return {...state, page: action.value}
        default: 
            return state
    }
} 
export const nextPageAction = (value: number) => ({type: NEXT_PAGE, value: value})
export const previousPageAction = (value: number) => ({type: PREVIOUS_PAGE, value: value})
export const currentPageFirstAction = (value: number) => ({type: CURRENT_PAGE_FIRST, value: value})


