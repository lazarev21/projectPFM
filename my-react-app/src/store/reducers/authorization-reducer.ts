
const defaultStateAuthorization = {
    isAuth: false
}
const LOGIN = "LOGIN";

export const authorizationReducer = (state = defaultStateAuthorization, action) => {
    switch (action.type) {
        case LOGIN: 
            return {...state, isAuth: true} 
        default: 
            return state
    }
} 
export const authorizationAction = (value: boolean) => ({type: LOGIN, isAuth: value})



