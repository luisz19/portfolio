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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Apply a robust offset equivalent to the header height
            const headerOffset = 120; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

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
        }, { threshold: 0, rootMargin: "-40% 0px -50% 0px" });

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);


    return (
        <header className={`block fixed top-0 left-0 w-full z-50  transition-all duration-500 ${isScrolled ? 'md:py-8 pt-6' : 'md:pt-6 pt-6'}`}>
            <div className={`flex items-center justify-center duration-500 w-full px-2 sm:px-4 md:px-0`}>
                
                <nav className={`flex items-center justify-around md:justify-center transition-all duration-200 w-full md:w-auto w-[350px] overflow-x-auto no-scrollbar ${
                    isScrolled 
                        ? 'bg-white-subtle backdrop-blur-md rounded-xl md:rounded-xl md:pl-4 pl-3 md:pr-1.5 pr-1.5 py-1.5 md:py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_inset_0_1px_1px_rgba(238,244,237,0.3)]' 
                        : ''
                }`}>
                    <div className="flex justify-between md:justify-center md:gap-8 items-center transition-all flex-1 md:pl-0 pl-1">
                        {sections.slice(0, -1).map((section) => {
                            const isActive = activeSection === section.id;
                            return (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => handleNavClick(e, section.id)}
                                    className={`text-gray md:hover:text-[1rem] hover:text-[0.8rem] transition-all duration-300 md:text-sm text-xs sm:text-xs whitespace-nowrap ${isActive ? 'active font-bold text-white' : ''}`}
                                >
                                    {section.label}
                                </a>
                            )
                        })}
                    </div>

                    <a 
                        href={`#${sections[sections.length - 1].id}`}
                        onClick={(e) => handleNavClick(e, sections[sections.length - 1].id)}
                        className="shrink-0 ml-4 items center flex md:ml-6"
                    >
                        <Button variant="default" size="sm" className="rounded-lg text-[10px] sm:text-xs md:text-sm h-6 md:h-9 px-2 md:px-4">
                            {sections[sections.length - 1].label}
                        </Button>
                    </a>
                    
                </nav>

                
            </div>
        </header>
    )
}