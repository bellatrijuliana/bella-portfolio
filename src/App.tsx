import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Services from './pages/Services'
import Mentorship from './pages/Mentorship'
import LifeDebugging from './pages/LifeDebugging' 
import LittleLab from './pages/LittleLab'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/lifedebugging" element={<LifeDebugging />} />
        <Route path="/LittleLab" element={<LittleLab />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App