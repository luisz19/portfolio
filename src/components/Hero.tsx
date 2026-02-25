import { Button } from "./ui/button"
import { HERO_CONTENT } from "@/constants/heroContent"
import { ArrowUpRight, Copy } from "lucide-react"

const iconMap = {
    ArrowUpRight,
    Copy
}

function Hero () {

    return (
        <section className="py-section flex justify-center flex-col gap-7 h-screen">
            <h1 className="text-7xl font-bold  block text-white/70">
                {HERO_CONTENT.title}
                <span className="text-white"><br/>{HERO_CONTENT.subtitle}</span>
            </h1>
            <p className="text-4xl text-gray max-w-3xl rounded-">{HERO_CONTENT.description}</p>
            <div className="flex gap-6">
                {HERO_CONTENT.buttons.map((button, index) => {
                    const Icon = iconMap[button.icon as keyof typeof iconMap] //mapeia para o componente de ícone correto
                    return (
                        <Button 
                            key={index}
                            className="flex items-center"
                            size="lg"
                            variant={button.variant === "default" ? "default" : "ghost"}
                        >
                            {button.label}
                            <Icon className={button.iconColor} size={20} />
                        </Button> 
                    )
                })}
            </div>
        </section>
    )
}

export default Hero