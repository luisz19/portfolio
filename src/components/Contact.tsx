import { CONTACT_CONTENT } from "../constants/contactContent";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

function Contact () {
    return (
        <motion.section 
            className="flex flex-col py-section mb-section items-start gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2 variants={itemVariants} className="text-6xl font-semibold text-white text-center">{CONTACT_CONTENT.title}</motion.h2>
            <motion.p variants={itemVariants} className="text-4xl text-gray max-w-3xl">
                {CONTACT_CONTENT.description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-6">
                {CONTACT_CONTENT.socialLinks.map((link) => (
                    <a key={link.name} href={link.url}>
                        <link.icon size={32} />
                    </a>
                ))}
            </motion.div>
        </motion.section>
    );  
}

export default Contact;