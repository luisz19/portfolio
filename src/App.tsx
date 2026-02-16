import { Button, Card, Header } from "@/components"

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
    <div className="min-h-screen  bg-bg-base text-text-primary px-section py-lg">
      <Header 
        sections={sections}

      />
    </div>
  )
}

export default App
