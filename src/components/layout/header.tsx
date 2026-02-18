import { Button, Card } from "@/components"
import { section } from "framer-motion/client"
import { useEffect, useState } from "react"

type Section = {
    id: string
    label: string
    //isActive?: boolean
}

interface HeaderProps {
    sections: Section[]
}

export const Header = ({ sections }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

   

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-8' : 'pt-6'}`}>
            <div className={`max-w-[1440px] mx-auto px-section flex items-center justify-center   duration-500 `}>
                
                <nav className={`flex items-center transition-all duration-200  ${
                    isScrolled 
                        ? 'bg-card-light backdrop-blur-md rounded-xl pl-4 pr-2 py-2 gap-6 shadow-lg' 
                        : 'gap-8'
                }`}>
                    <div className="flex gap-8 items-center flex-1">
                        {sections.slice(0, -1).map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="text-text-primary hover:text-text-secondary transition-colors duration-300 text-sm"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>

                    <Button variant="default" size="sm" className="rounded-lg">
                        {sections[sections.length - 1].label}
                    </Button>
                    
                </nav>

                
            </div>
        </header>
    )
}