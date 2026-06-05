import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdicionarGatos } from './pages/adicionarGatos'
import { ListarGatos } from './pages/listaDeGatos'
import { ListarNPCs } from './pages/listaDeNPCs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListarGatos />} />
        <Route path="/adicionar" element={<AdicionarGatos />} />
        <Route path="/npcs" element={<ListarNPCs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
