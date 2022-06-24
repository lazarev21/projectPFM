import React from 'react'
import { useState, useContext } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Container } from './Components/Container'

function App() {

  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  )
}

export default App
