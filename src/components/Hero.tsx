import { Button } from "./ui/button"
import { HERO_CONTENT } from "@/constants/heroContent"
import { ArrowUpRight, Copy } from "lucide-react"
import { motion } from "framer-motion"
import { itemVariants } from "@/lib/animations"
import { Section } from "./Section"

const iconMap = {
    ArrowUpRight,
    Copy
}

function Hero() {

    return (
        <Section
            id="home"
            className="flex justify-center flex-col gap-5 md:gap-7 h-full my-[5%]  md:py-section-md pb-section-md"
            animate="visible"
        >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold  block text-white/70">
                {HERO_CONTENT.title}
                <span className="text-white"><br />{HERO_CONTENT.subtitle}</span>
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