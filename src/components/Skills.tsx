import { SKILLS_CONTENT } from "@/constants/skillsContent";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

function Skills() {
  return (
    <motion.section 
      id="skills"
      className="flex flex-col py-section gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants} className="text-5xl font-semibold text-white text-center">Skills</motion.h2>

      {/* Card de tecnologias */}
      <motion.div variants={itemVariants}>
      <Card className="mt-8 gap-4">
        <span className="text-xs font-semibold tracking-widest text-gray/60 uppercase">
          Tecnologias
        </span>
        <ul className="grid grid-cols-5 gap-3">
          {SKILLS_CONTENT.tecnologies.map((tech) => (
            <Badge key={tech.id} variant="default" className="flex items-center  bg-dark px-3 py-2">
                <li
                key={tech.id}
                className="flex items-center gap-3"
                >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue shrink-0">
                    <span className="text-xs font-bold text-white">{tech.abbrev}</span>
                </div>
                <span className="text-sm text-gray font-medium">{tech.name}</span>
                </li>

            </Badge>
          ))}
        </ul>
      </Card>
      </motion.div>

      {/* Cards de descrição */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
        {[SKILLS_CONTENT.fullstackDescription, SKILLS_CONTENT.uxDescription].map((item) => (
          <Card key={item.title} className="gap-4 p-2">
            <figure className="w-full h-48 rounded-lg bg-dark overflow-hidden">
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full" />
              )}
            </figure>
            <div className="flex flex-col gap-2 px-2 pb-2">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray ">{item.text}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;