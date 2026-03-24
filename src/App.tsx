import { Header } from "@/components"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import LiquidGradientBackground from "./components/LiquidGradientBackground"

type Section = {
    id: string
    label: string
    component?: React.ReactNode
}

function App() {

  //mover cada um para um arquivo separado e importar aqui, depois mapear para o header e para a renderização das seções
  const sections: Section[] = [
        { id: 'home', label: 'Home', component: <Hero /> },
        { id: 'about', label: 'Sobre', component: <AboutMe /> },
        { id: 'projects', label: 'Projetos', component: <Projects title="Projetos" /> },
        { id: 'experience', label: 'Experiência', component: <Experience /> },
        { id: 'skills', label: 'Skills', component: <Skills /> },
        { id: 'contact', label: 'Contato', component: <Contact /> },
    ]

  return (
    <div className="relative text-white">
      <LiquidGradientBackground>
        <div className="md:max-w-[1440px] mx-auto px-section py-section-md md:px-section-md gap-y-section flex flex-col">
          <Header 
            sections={sections}
          />
          <Hero />
          <AboutMe />
            <Projects title="Projetos" />
            <Experience />
            <Skills />
            <Contact />
          </div>
      </LiquidGradientBackground>
        </div>


  )
}

export default App
