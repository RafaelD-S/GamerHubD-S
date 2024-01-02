import './styles/main.scss'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' 

import Home from './components/Home/home'
import Header from './components/header/header'
import JogoDaVelha from './pages/jogoDaVelha/jogoDaVelha'

import JogoDaMemoria from './pages/JogoDaMemoria/Jogo/jogoDaMemoria'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jogo-da-velha' element={<JogoDaVelha/>}/> 
            <Route path='/jogo-da-memoria' element={<JogoDaMemoria/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
