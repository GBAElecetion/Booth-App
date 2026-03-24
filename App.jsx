import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ZonePage from './pages/ZonePage'
import BoothPage from './pages/BoothPage'
import AllBooths from './pages/AllBooths'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zone/:zoneName" element={<ZonePage />} />
        <Route path="/booth/:boothNo" element={<BoothPage />} />
        <Route path="/all" element={<AllBooths />} />
      </Routes>
    </BrowserRouter>
  )
}
