import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectsCategory from './pages/ProjectsCategory'
import Disclaimer from './pages/Disclaimer'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:categorySlug" element={<ProjectsCategory />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
