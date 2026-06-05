import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { AdicionarGatos } from './pages/adicionarGatos'
import { ListarGatos } from './pages/listaDeGatos'
import { ListarNPCs } from './pages/listaDeNPCs'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {
  

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListarGatos />} />
            <Route path="/adicionar" element={<AdicionarGatos />} />
            <Route path="/npcs" element={<ListarNPCs />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App