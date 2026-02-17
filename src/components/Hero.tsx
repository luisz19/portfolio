import { ArrowUpRight, Copy } from "lucide-react"
import { Button } from "./ui/button"

function Hero () {
    return (
        <section className="py-section flex justify-center flex-col gap-7">
            
            <h1 className="text-7xl font-bold  block text-text-primary/70">
                Olá, me chamo Luis!
                <span className="text-text-primary"><br/>Desenvolvedor Fullstack.</span>
            </h1>
            <p className="text-4xl text-text-secondary max-w-3xl rounded-">Uso o código como ferramenta para explorar, estruturar e transformar ideias em sistemas.</p>
            <div className="flex gap-6">
                <Button 
                    className="flex items-center"
                    size="lg"
                    variant='default'
                >
                    Contate-me
                    <ArrowUpRight color="rgba(8, 48, 94, 0.86)"
                    />
                </Button>
                <Button 
                    size="lg"
                    variant='ghost'
                >
                    Copiar e-mail 
                    <Copy color="#EEF4ED"
                    />
                </Button>
            </div>
        </section>
    )
}

export default Hero