import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './components/MainContent'
import Article from './components/Article'
import Navbar from './components/Navbar'
import './components/style.scss'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <Events/>
      <MainContent/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App
