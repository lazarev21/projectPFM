import React from "react";
import { authorizationHelper } from "../helpers/authorization";
import {useDispatch} from 'react-redux'
import { authorizationAction } from "../store/reducers/authorization-reducer";

export function AuthorizationModal({modalAuthorizationActive, setModalAuthorizationActive}) {
    const dispatch = useDispatch()
    const authorization = () => {
      dispatch(authorizationAction(true))
    }
    return (
        <div className={modalAuthorizationActive ? "modal-authorization-back active" : "modal-authorization-back"} onClick={()=> {setModalAuthorizationActive(false)}}>
            <div className="modal-authorization" onClick={e => e.stopPropagation()}>
                <div className="modal-authorization__main">
                    <div className="modal-authorization__main__header">
                        <p className="modal-authorization__main__header__title">
                            Авторизация
                        </p>
                        <a className="modal-authorization__main__header__btn-close close-modal-authorization">
                            +
                        </a>
                    </div>

                <form className="authorization-form" onSubmit={(event) => {event.preventDefault(); {if (authorizationHelper(event)) {authorization()}} setModalAuthorizationActive(false)}}>      
                    <div className="modal-authorization__main__body">
                        <p className="authorization-form__header">Почта:</p>
                        <div className="input-email">
                            <input type="email" className="input-email__field" required />                     
                        </div>
                        <p className="authorization-form__header">Пароль:</p>
                        <div className="input-password">
                        <input type="text" className="input-name__field" required />
                        </div>
                    </div>
                    <input type="submit" className="input-email__submit" value="Авторизоваться" />
                </form>
                </div>
            </div>
        </div>

    )
}