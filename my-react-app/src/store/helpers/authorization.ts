import { dataAuthorization } from "../../data/data-authorization";


export function authorizationHelper(event) {
    
    const dataAuthorizationFromUI = {
        login: event.target[0].value,
        password: event.target[1].value,
    }

    if (dataAuthorizationFromUI.password === dataAuthorization.password && dataAuthorizationFromUI.login === dataAuthorization.login ) {
        console.log(true)
        return true
    }
    else {
        console.log(false)
        console.log(dataAuthorizationFromUI)
        
    }

}