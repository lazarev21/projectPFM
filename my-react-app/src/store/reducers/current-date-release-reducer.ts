
const defaultStateCurrentDateRelease = {
    year: '2020'
}
const YEAR = 'YEAR'

export const currentDateReleaseReducer = (state = defaultStateCurrentDateRelease, action) => {
    switch (action.type) {
        case YEAR: 
            return {...state, year: action.value} 
        default: 
            return state
    }
} 
export const yearAction = (value: string) => ({type: YEAR, value: value})




