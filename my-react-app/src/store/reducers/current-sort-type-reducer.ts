import { SORT_BY_POPULAR_IN_DESCENDING } from "../../const"
const defaultSortType = {
    sortBy: SORT_BY_POPULAR_IN_DESCENDING
}

const SORT_BY = 'SORT_BY'

export const currentSortTypeReducer = (state = defaultSortType, action) => {
    switch (action.type) {
        case SORT_BY: 
            return {...state, sortBy: action.value} 
        default: 
            return state
    }
} 
export const sortingAction = (value: string) => ({type: SORT_BY, value: value})




