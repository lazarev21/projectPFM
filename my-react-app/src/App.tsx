import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Layout} from './Components/layout'
import { useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import { Header } from './Components/header'
import { Container } from './Components/container'
import { authorizationAction } from "./store/reducers/authorization-reducer";
import { checkStorageAuthorization } from './helpers/check-storage-authorization'
import { HomePage } from './pages/home-page'
import { MoviePage } from './pages/movie-page'
import {SingleMoviePage} from './pages/single-movie-page'

function App({dataAuthorization}) {
  const dispatch = useDispatch()
  const authorization = () => {
      dispatch(authorizationAction(true))
    }
  const [modalAuthorizationActive, setModalAuthorizationActive ] = useState(false)

useEffect(() => {
  if (checkStorageAuthorization(dataAuthorization)) {
    authorization()
    console.log(true)
  }
}, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive={setModalAuthorizationActive}/>}> 
          <Route index element={<HomePage modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive={setModalAuthorizationActive}/>} />
          <Route path="movie-page" element={<MoviePage modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive={setModalAuthorizationActive}/>} />
          <Route path="movie-page/:id" element={<SingleMoviePage modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive={setModalAuthorizationActive} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
