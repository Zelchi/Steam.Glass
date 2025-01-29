import { HashRouter, Routes, Route } from 'react-router-dom'
import { BarraDeNavegacao } from './components/Global/BarraDeNavegacao'
import { BarraLateralDosJogos } from './components/Global/BarraLateralDosJogos'
import { PaginaInicial } from './components/Home/PaginaInicial'
import { DetalheDoJogo } from './components/Info/DetalheDoJogo'
import { Provider } from 'react-redux'
import store from './Store/Store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <BarraDeNavegacao />
        <BarraLateralDosJogos/>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/jogo/:id" element={<DetalheDoJogo />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App