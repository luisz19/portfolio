import MyProfile from '@/assets/me.webp';

export const ABOUT_CONTENT = {
    img: {
        src: MyProfile,
        alt: "Foto de perfil"
    },
    title: "Sobre Mim",
    paragraph: [
        "Sou graduando em Sistemas de Informação, atualmente no 7º semestre. Atuo no desenvolvimento de sistemas com foco em estrutura, clareza e propósito, utilizando a criatividade como parte do processo de solução.",
        "Tenho flexibilidade para trabalhar tanto no frontend quanto no backend, buscando sempre criar soluções que sejam funcionais e esteticamente agradáveis.",
        "Minha formação em tecnologia se cruza com a fotografia e o audiovisual, áreas que influenciam diretamente minha forma de observar, analisar e criar.",
        "",
        "Encaro a tecnologia como um meio para transformar ideias em sistemas bem pensados, onde lógica, estética e experiência caminham juntas."
    ],
    cards: [
        {
            icon: {
                name: "Brain",
                color: "text-white"
            },
            title: "Pensamento Criativo",
            description: "Uso da criatividade e do olhar visual para enriquecer a experiência e o design das soluções."
        },
        {
            icon: {
                name: "Puzzle",
                color: "text-white"
            },
            title: "Resolução de Problemas",
            description: "Análise cuidadosa de problemas para criar soluções funcionais, eficientes e bem pensadas."
        },
    ]
}
