import { CONTACT_CONTENT } from "../constants/contactContent";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { Section } from "./Section";
import { Card } from "./ui/card";

function Contact () {
    return (
        <Section 
            id="contact"
            className="flex flex-col items-start justify-start gap-6 pb-section-md"
        >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-semibold text-white text-start">{CONTACT_CONTENT.title}</motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl text-gray max-w-3xl">
                {CONTACT_CONTENT.description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
                <Card className="flex flex-row p-2 gap-4">

                    {CONTACT_CONTENT.socialLinks.map((link) => (
                        <a key={link.name} href={link.url} className="cursor-pointer" onClick={link.onClick} target="_blank" rel="noopener noreferrer">
                            <img className="w-12 h-12" src={link.icon} alt={link.name} />
                        </a>
                    ))} 
                </Card>
            </motion.div>
        </Section>
    );  
}

export default Contact;