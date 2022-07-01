import { dataAuthorization } from "../data/data-authorization";

export function authorizationHelper(event) {
  const dataAuthorizationFromUI: { login: string; password: string } = {
    login: event.target[0].value,
    password: event.target[1].value,
  };

  localStorage.setItem(
    "dataAuthorization",
    JSON.stringify(dataAuthorizationFromUI)
  );

  if (
    dataAuthorizationFromUI.password === dataAuthorization.password &&
    dataAuthorizationFromUI.login === dataAuthorization.login
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
