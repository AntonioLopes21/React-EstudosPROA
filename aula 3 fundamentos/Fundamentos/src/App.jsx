import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importando componentes
import FirstComponent from './components/FirstComponent'
import Article from './components/Article'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos do react: </h1>
      <Header/>

      <FirstComponent />
      <Article/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
