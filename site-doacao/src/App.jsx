import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdicionarGatos } from './pages/adicionarGatos'
import { ListarGatos } from './pages/listaDeGatos'
import { ListarNPCs } from './pages/listaDeNPCs'
import { GlobalStyle } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListarGatos />} />
          <Route path="/adicionar" element={<AdicionarGatos />} />
          <Route path="/npcs" element={<ListarNPCs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App