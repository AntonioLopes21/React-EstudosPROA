
import './App.css'
import MainContent from './components/MainContent'
import Article from './components/Article'
import './components/style.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import imagenzinha from './assets/laRoxa.png'
import Imagens from './components/imagens'

function App() {

  const hp = 100

  return (
    <>
      <Header/>
      <MainContent name="Antônio" idade={20} hp = {hp} />
      <Imagens/>
      <Article/>
      <div id='fotinhas'>
      <img src={imagenzinha} alt=""/>
      <img src="aRoxa.png" alt="" />
      </div>
      <Footer/>
    </>
  )
}

export default App
