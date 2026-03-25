export const HERO_CONTENT = {
    title: "Olá, me chamo Luis!",
    subtitles: ["Desenvolvedor Fullstack.", "UI/UX Designer."],
    description: "Uso o código como ferramenta para explorar, estruturar e transformar ideias em sistemas.",
    buttons: [
        {
            label: "Contate-me",
            variant: "default" as const,
            icon: "ArrowUpRight" ,
            iconColor: "text-blue",
            onClick: () => window.open("mailto:luiss18.code@gmail.com")
        },
        {
            label: "Download CV",
            variant: "ghost" as const,
            icon: "Download",
            iconColor: "text-white"
        }
    ]
 
}