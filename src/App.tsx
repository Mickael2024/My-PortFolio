import { LangProvider } from './components/LangProvider'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Expertise } from './components/Expertise'
import { Method } from './components/Method'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export default function App() {
  return (
    <LangProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Education />
        <Projects />
        <Expertise />
        <Method />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LangProvider>
  )
}
