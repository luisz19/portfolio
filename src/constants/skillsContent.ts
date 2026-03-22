import TypeScriptIcon from "@/assets/icons/typescript.svg"
import ReactIcon from "@/assets/icons/react.svg"
import NodeIcon from "@/assets/icons/node.svg"
import NestIcon from "@/assets/icons/nestjs.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import PostgresIcon from "@/assets/icons/postgres.svg"
import ExpressIcon from "@/assets/icons/express.svg"
import MongoIcon from "@/assets/icons/mongodb.svg"
import MysqlIcon from "@/assets/icons/mysql.svg"
import DockerIcon from "@/assets/icons/docker.svg"

export const SKILLS_CONTENT = {
    tecnologies: [
        { id: 1,  name: "TypeScript",  abbrev: "TS", icon: TypeScriptIcon },
        { id: 2,  name: "React",        abbrev: "Re", icon: ReactIcon },
        { id: 3,  name: "NodeJS",       abbrev: "No", icon: NodeIcon },
        { id: 4,  name: "NestJS",       abbrev: "Ne", icon: NestIcon },
        { id: 5,  name: "TailwindCSS",  abbrev: "Tw", icon: TailwindIcon },
        { id: 6,  name: "PostgreSQL",   abbrev: "Pg", icon: PostgresIcon },
        { id: 7,  name: "Express",      abbrev: "Ex", icon: ExpressIcon },
        { id: 8,  name: "MongoDB",      abbrev: "Mg", icon: MongoIcon },
        { id: 9,  name: "MySQL",        abbrev: "My", icon: MysqlIcon },
        { id: 10, name: "Docker",       abbrev: "Dk", icon: DockerIcon },
    ],
    fullstackDescription: {
        title: "Fullstack Development",
        text: "Atuo no desenvolvimento de sistemas, transformando problemas em soluções funcionais. Priorizo clareza na lógica, boas práticas e integração eficiente entre interface, API e banco de dados.",
        image: "",
    },
    uxDescription: {
        title: "UI/UX Design",
        text: "Desenvolvo interfaces unindo princípios de design, narrativa visual e experiência do usuário. Minha vivência no audiovisual influencia a forma como penso ritmo, hierarquia e percepção visual.",
        image: "",
    }
}

