import { Header, GradientMesh } from "@/components"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"

type Section = {
    id: string
    label: string
}

function App() {

  const sections: Section[] = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Sobre' },
        { id: 'projects', label: 'Projetos' },
        { id: 'experience', label: 'Experiência' },
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
      </div>
    </div>
  )
}

export default App
