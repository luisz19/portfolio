import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import EmailIcon from '@/assets/icons/email.svg';

export const CONTACT_CONTENT = {
    title: "Vamos conversar!",
    description: "Se você tem uma ideia, projeto ou quer só trocar uma mensagem, fico feliz pelo contato!",
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/luisz19",
            icon: GithubIcon,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/luis-alencar-dev/",
            icon: LinkedinIcon,
        },
        {
            name: "Mail",
            icon: EmailIcon,
            onClick: () => window.open("mailto:luiss18.code@gmail.com"),
        },
    ],
}
    