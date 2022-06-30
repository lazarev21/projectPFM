import React from 'react'
import { useState } from 'react'
import './App.css'
import { Header } from './Components/header'
import { Container } from './Components/container'

function App() {
  const [modalAuthorizationActive, setmodalAuthorizationActive ] = useState(false
    )

  return (
    <div className="App">
      <Header modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive ={setmodalAuthorizationActive}/>
      <Container modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive ={setmodalAuthorizationActive}/>
    </div>
  )
}

export default App
