import { Button } from "@/components"
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
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" });

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);


    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-8' : 'pt-6'}`}>
            <div className={`max-w-[1440px] mx-auto px-section flex items-center justify-center   duration-500 `}>
                
                <nav className={`flex items-center transition-all duration-200  ${
                    isScrolled 
                        ? 'bg-white-subtle backdrop-blur-md rounded-xl pl-4 pr-2 py-2 gap-6  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_inset_0_1px_1px_rgba(238,244,237,0.3)]' 
                        : 'gap-8'
                }`}>
                    <div className="flex gap-8 items-center transition-all flex-1 ">
                        {sections.slice(0, -1).map((section) => {
                            const isActive = activeSection === section.id;
                            return (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`text-white hover:text-[1rem] transition-all duration-300 text-sm ${isActive ? 'active font-bold scale-105' : ''}`}
                                >
                                    {section.label}
                                </a>
                            )
                        })}
                    </div>

                    <a href={`#${sections[sections.length - 1].id}`}>
                        <Button variant="default" size="sm" className="rounded-lg">
                            {sections[sections.length - 1].label}
                        </Button>
                    </a>
                    
                </nav>

                
            </div>
        </header>
    )
}