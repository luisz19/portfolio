import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_CONTENT } from "../constants/contactContent";

function Contact () {
    return (
        <section className="flex flex-col py-section mb-section items-start gap-6">
            <h2 className="text-6xl font-semibold text-white text-center">{CONTACT_CONTENT.title}</h2>
            <p className="text-4xl text-gray max-w-3xl">
                {CONTACT_CONTENT.description}
            </p>
            <div className="flex gap-6">
                {CONTACT_CONTENT.socialLinks.map((link) => (
                    <a key={link.name} href={link.url}>
                        {link.icon === "github" && <Github size={32} />}
                        {link.icon === "linkedin" && <Linkedin size={32} />}
                        {link.icon === "mail" && <Mail size={32} />}
                    </a>
                ))}
            </div>
        </section>
    );  
}

export default Contact;