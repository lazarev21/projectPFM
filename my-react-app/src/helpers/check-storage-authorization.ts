
export function checkStorageAuthorization(dataAuthorization: {login: string; password: string}): boolean {
    if (localStorage.getItem('dataAuthorization') !== null) {
        const dataAuthorizationFromStorage = JSON.parse(localStorage.getItem('dataAuthorization')|| '{}');
        if (dataAuthorizationFromStorage.password === dataAuthorization.password 
          && dataAuthorizationFromStorage.login === dataAuthorization.login ) {
          return true
        }
      } return true
}