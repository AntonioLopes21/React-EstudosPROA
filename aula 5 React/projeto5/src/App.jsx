
import './App.css'
import MainContent from './components/MainContent'
import Article from './components/Article'
import './components/style.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import imagenzinha from './assets/laRoxa.png'
import Imagens from './components/imagens'

function App() {

  return (
    <>
      <Header/>
      <MainContent/>
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
