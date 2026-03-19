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
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
        .mask-image-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
      
      <motion.h2 variants={itemVariants} className="text-5xl font-semibold text-white text-center">Skills</motion.h2>

      {/* Card de tecnologias */}
      <motion.div variants={itemVariants}>
        <Card className="mt-8 flex flex-col gap-4 px-4 overflow-hidden">
          <span className="text-xs font-semibold tracking-widest text-gray/60 uppercase">
            Tecnologias
          </span>
          
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex overflow-hidden w-full marquee-container mask-image-fade -mx-2">
              <div className="flex gap-3 w-max animate-marquee-left px-3">
                {[...SKILLS_CONTENT.tecnologies.slice(0, Math.ceil(SKILLS_CONTENT.tecnologies.length / 2)), ...SKILLS_CONTENT.tecnologies.slice(0, Math.ceil(SKILLS_CONTENT.tecnologies.length / 2))].map((tech, i) => (
                  <Badge key={`${tech.id}-1-${i}`} variant="default" className="flex items-center transition-colors  duration-300 px-3 py-2 w-[220px] shrink-0">
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue shrink-0">
                        <span className="text-xs font-bold text-white">{tech.abbrev}</span>
                      </div>
                      <span className="text-sm text-gray font-medium whitespace-nowrap">{tech.name}</span>
                    </div>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Segunda linha (da esquerda para direita) */}
            <div className="flex overflow-hidden w-full marquee-container mask-image-fade -mx-2">
              <div className="flex gap-3 w-max animate-marquee-right px-3">
                {[...SKILLS_CONTENT.tecnologies.slice(Math.ceil(SKILLS_CONTENT.tecnologies.length / 2)), ...SKILLS_CONTENT.tecnologies.slice(Math.ceil(SKILLS_CONTENT.tecnologies.length / 2))].map((tech, i) => (
                  <Badge key={`${tech.id}-2-${i}`} variant="default" className="flex items-center bg-dark px-3 py-2 w-[220px] shrink-0 ">
                    <div className="flex items-center gap-3 w-full ">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue shrink-0">
                        <span className="text-xs font-bold text-white ">{tech.abbrev}</span>
                      </div>
                      <span className="text-sm text-gray font-medium whitespace-nowrap ">{tech.name}</span>
                    </div>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Cards de descrição */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
        {[SKILLS_CONTENT.fullstackDescription, SKILLS_CONTENT.uxDescription].map((item) => {
          const isUX = item.title === "UI/UX Design";
          const isFullstack = item.title === "Fullstack Development";

          return (
            <Card key={item.title} className="gap-4 p-2 group transition-all duration-500 hover:border-cyan/30">
              <figure className="w-full h-48 rounded-lg bg-dark overflow-hidden flex justify-center items-start transition-colors duration-500 group-hover:bg-dark-deep">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : isUX ? (
                  <UXWireframe />
                ) : isFullstack ? (
                  <FullstackGraphic />
                ) : null}
              </figure>
              <div className="flex flex-col gap-2 px-2 pb-2 mt-2">
                <h3 className="text-xl text-gray font-bold  transition-colors duration-300 group-hover:text-white">{item.title}</h3>
                <p className="text-gray">{item.text}</p>
              </div>
            </Card>
          )
        })}
      </motion.div>
    </motion.section>
  );
}

export default Skills;

const UXWireframe = () => (
    <div className="w-[75%] h-36 mt-10 bg-[#E6E4DF] transition-all duration-500 group-hover:rounded-xl group-hover:bg-white flex flex-col shadow-lg overflow-hidden rounded-none border-b-0 border-transparent">
        {/* Header */}
        <div className="h-5 w-full bg-[#CDC9C1] transition-all duration-500 group-hover:bg-gray-border/20 flex items-center px-2.5 gap-1.5">
            <div className="w-2 h-2 bg-[#B3AFA5] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-[#FF5F56]" />
            <div className="w-2 h-2 bg-[#B3AFA5] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-[#FFBD2E]" />
            <div className="w-2 h-2 bg-[#B3AFA5] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-[#27C93F]" />
        </div>
        
        {/* Body */}
        <div className="flex-1 flex gap-3 p-3 overflow-hidden">
            {/* Sidebar (left) */}
            <div className="w-[20%] h-full bg-[#CDC9C1] transition-all duration-500 rounded-none group-hover:rounded-lg group-hover:bg-blue/30" />
            
            {/* Texts (center) */}
            <div className="flex-1 flex flex-col gap-2.5 justify-center">
                <div className="w-full h-3 bg-[#CDC9C1] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-cyan/80" />
                <div className="w-[70%] h-3 bg-[#CDC9C1] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-cyan/60" />
                <div className="w-[85%] h-3 bg-[#CDC9C1] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-cyan/40" />
            </div>
            
            {/* Image Box (right) */}
            <div className="w-[30%] h-full bg-[#CDC9C1] transition-all duration-500 rounded-none group-hover:rounded-xl group-hover:bg-royal/40" />
        </div>
    </div>
);

const FullstackGraphic = () => (
    <div className="w-[75%] h-36 mt-10 bg-[#1E1E1E] transition-all duration-500 group-hover:rounded-xl flex flex-col shadow-lg overflow-hidden rounded-none border border-gray-border/30 group-hover:bg-[#1e1e2e]">
        <div className="h-5 w-full bg-[#2D2D2D] transition-all duration-500 group-hover:bg-[#181825] flex items-center px-2.5 gap-1.5">
            <div className="w-2 h-2 bg-[#555] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-[#f38ba8]" />
            <div className="w-2 h-2 bg-[#555] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-[#f9e2af]" />
            <div className="w-2 h-2 bg-[#555] transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-[#a6e3a1]" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 opacity-60 transition-all duration-500 group-hover:opacity-100">
            <div className="flex gap-2 items-center">
               <span className="text-cyan text-sm font-mono font-bold transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:text-[#a6e3a1]">{">"}</span>
               <div className="w-[60%] h-3 bg-[#555] transition-all duration-500 rounded-none group-hover:rounded-sm group-hover:bg-[#cba6f7]" />
            </div>
            <div className="flex gap-2 pl-4">
               <div className="w-1/3 h-3 bg-[#444] transition-all duration-500 rounded-none group-hover:rounded-sm group-hover:bg-[#89b4fa]" />
               <div className="w-1/4 h-3 bg-[#444] transition-all duration-500 rounded-none group-hover:rounded-sm group-hover:bg-[#f5c2e7]" />
            </div>
            <div className="flex gap-2 pl-4">
               <div className="w-[70%] h-3 bg-[#444] transition-all duration-500 rounded-none group-hover:rounded-sm group-hover:bg-[#fab387]" />
            </div>
        </div>
    </div>
);