import React from 'react'
import { useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import { Header } from './Components/header'
import { Container } from './Components/container'
import { authorizationAction } from "./store/reducers/authorization-reducer";

import { checkStorageAuthorization } from './helpers/check-storage-authorization'

function App({dataAuthorization}) {
  const dispatch = useDispatch()
  const authorization = () => {
      dispatch(authorizationAction(true))
    }
  const [modalAuthorizationActive, setmodalAuthorizationActive ] = useState(false)

useEffect(() => {
  if (checkStorageAuthorization(dataAuthorization)) {
    authorization()
    console.log(true)
  }
}, [])

  return (
    <div className="App">
      <Header modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive ={setmodalAuthorizationActive}/>
      <Container modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive ={setmodalAuthorizationActive}/>
    </div>
  )
}

export default App
