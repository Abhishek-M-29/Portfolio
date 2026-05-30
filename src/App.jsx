import useLenis from './hooks/useLenis'
import ParticleField from './components/ParticleField'
import ScrollProgress from './components/ScrollProgress'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SectionDivider from './components/SectionDivider'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <>
      <a href="#hero" className="skip-to-content">Skip to content</a>
      <ScrollProgress />
      <ParticleField />
      <NavBar />
      <main>
        <section id="hero"><Hero /></section>
        <SectionDivider />
        <section id="about"><About /></section>
        <SectionDivider />
        <section id="skills"><Skills /></section>
        <SectionDivider />
        <section id="projects"><Projects /></section>
        <SectionDivider />
        <section id="achievements"><Achievements /></section>
        <SectionDivider />
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}
