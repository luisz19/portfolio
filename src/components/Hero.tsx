import { Button } from "./ui/button"
import { HERO_CONTENT } from "@/constants/heroContent"
import { ArrowUpRight, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { itemVariants } from "@/lib/animations"
import { Section } from "./Section"
import { useState, useEffect } from "react"

const iconMap = {
    ArrowUpRight,
    Download
}

function Hero() {
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSubtitleIndex((prev) => (prev + 1) % HERO_CONTENT.subtitles.length);
        }, 3500); // Swaps every 3.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Section
            id="home"
            className="flex justify-center flex-col gap-5 md:gap-7 md:h-full h-[80vh] my-[5%]  md:py-section-md pb-section-md"
            animate="visible"
        >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold block text-white/70">
                {HERO_CONTENT.title}
                <br />
                <span className="text-white block min-h-[1.3em] mt-1 md:mt-2">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentSubtitleIndex}
                            className="inline-block"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.05 } },
                                exit: { transition: { staggerChildren: 0.02 } }
                            }}
                        >
                            {HERO_CONTENT.subtitles[currentSubtitleIndex].split(" ").map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            variants={{
                                                hidden: { opacity: 0, filter: "blur(12px)", x: -5 },
                                                visible: { opacity: 1, filter: "blur(0px)", x: 0 },
                                                exit: { opacity: 0, filter: "blur(12px)", x: 5 }
                                            }}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl text-gray max-w-3xl rounded-">
                {HERO_CONTENT.description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex md:gap-6 gap-3">
                {HERO_CONTENT.buttons.map((button, index) => {
                    const Icon = iconMap[button.icon as keyof typeof iconMap] //mapeia para o componente de ícone correto
                    return (
                        <Button
                            key={index}
                            className="flex items-center text-sm md:text-base "
                            size="lg"
                            variant={button.variant === "default" ? "default" : "outline"}
                            onClick={button.onClick}
                        >
                            {button.label}
                            <Icon className={button.iconColor} size={20} />
                        </Button>
                    )
                })}
            </motion.div>
        </Section>
    )
}

export default Hero