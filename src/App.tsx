import { Header, GradientMesh } from "@/components"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"

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
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contato' },
    ]

  return (
    <div className="relative text-white">
      <GradientMesh />  
      <div className="max-w-[1440px] mx-auto px-section py-lg">
        <Header 
          sections={sections}
        />
        <Hero />
        <AboutMe />
        <Projects title="Projetos" />
        <Experience />
        <Skills />
      </div>
    </div>
  )
}

export default App
