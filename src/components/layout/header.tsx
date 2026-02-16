import { Button, Card } from "@/components"
import { section } from "framer-motion/client"

type Section = {
    id: string
    label: string
    //isActive?: boolean
}

interface HeaderProps {
    sections: Section[]
}

export const Header = ({ sections }: HeaderProps) => {

    

    return (
        <header className="w-full justify-center items-center gap-8 flex">
                <nav className="flex gap-8">
                    {sections.slice(0, -1).map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="text-text-primary hover:text-text-secondary transition-colors duration-300"
                        >
                            {section.label}
                        </a>
                    ))}
                
            </nav>

            <div>
                <Button variant="outline" size="sm">
                    {sections[sections.length - 1].label}
                </Button>
            </div>  
        
        </header>
    )
}