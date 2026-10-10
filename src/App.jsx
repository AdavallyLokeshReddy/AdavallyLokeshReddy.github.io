import { MotionConfig } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Approach from './components/sections/Approach'
import Contact from './components/sections/Contact'
import Skills from './components/sections/Skills'
import Work from './components/sections/Work'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#work"
        className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Approach />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
