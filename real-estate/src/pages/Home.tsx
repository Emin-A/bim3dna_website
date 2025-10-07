import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import Hero from '../components/home/Hero'
import Process from '../components/home/Process'
import Services from '../components/home/Services'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null

    if (state?.scrollTo) {
      const target = document.getElementById(state.scrollTo)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
      navigate(location.pathname, { replace: true })
    }

    if (location.search.includes('scroll=')) {
      const params = new URLSearchParams(location.search)
      const section = params.get('scroll')
      if (section) {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      navigate(location.pathname, { replace: true })
    }
  }, [location, navigate])

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default Home
