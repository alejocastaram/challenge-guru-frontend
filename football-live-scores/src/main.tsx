import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Home } from './features/home/Home'
import { CreateFootballMatchForm } from './features/create-football-match/CreateFootballMatchForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-football-match" element={<CreateFootballMatchForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
