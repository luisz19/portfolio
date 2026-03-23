import LandingPage from "@/assets/projects/arq-brisas.webp"
import MoviesReviews from "@/assets/projects/movies.webp"
import CryptoLens from "@/assets/projects/cryptolens.webp"
import DicionaryApp from "@/assets/projects/dicionary-app.webp"
import TasksManager from "@/assets/projects/tasks.webp"



export const PROJECT_CONTENT = [
    {
    id: 1,
    title: "Landing Page Arquitetônica",
    category: "Projeto freelancer",
    description: "Landing page para apresentação de projeto arquitetônico, com foco em design moderno, clareza visual e responsividade.",
    badges: ["React", "Tailwind", "Framer Motion", "TypeScript"],
    image: LandingPage,
    link: "https://brisas-do-cariri-arq.vercel.app/"
},
{
    id: 2,
    title: "Plataforma de Reviews",
    category: "Projeto em equipe",
    description: "Plataforma web para avaliações e recomendações de filmes. Atuei no frontend, focando em interface, experiência do usuário e integração com API.",
    badges: ["React", "TypeScript", "Tailwind"],
    image: MoviesReviews,
    link: "https://github.com/MarcosViictor/reviews/tree/dev/Frontend"
},
{
    id: 3,
    title: "CryptoLens",
    category: "Projeto em equipe",
    description: "Sistema de recomendação de criptomoedas com base em perfil de risco. Atuei no backend integrando modelo de Machine Learning e API, com apoio no frontend.",
    badges: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Tailwind"],
    image: CryptoLens,
    link: "https://github.com/luisz19/cryptolens-backend"
},
{
    id: 4,
    title: "Task Manager",
    category: "Projeto pessoal",
    description: "Sistema fullstack para gerenciamento de tarefas com autenticação JWT, dashboard, filtros e edição de status.",
    badges: ["React", "TypeScript", "Tailwind", "RadixUI", "Node.js", "Express", "MySQL", "JWT"],
    image: TasksManager,
    link: "https://github.com/luisz19/task-manager"
},
{
    id: 5,
    title: "Dictionary App",
    category: "Projeto pessoal",
    description: "Aplicativo mobile para aprendizado de idiomas com cadastro, edição e busca de palavras, utilizando armazenamento local.",
    badges: ["React Native", "Expo", "Styled Components", "Async Storage"],
    image: DicionaryApp,
    link: "https://github.com/luisz19/dicionary-app"
}
]