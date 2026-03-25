import { SKILLS_CONTENT } from "@/constants/skillsContent";
import { Card } from "./ui/card";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2 } from "lucide-react";
import { itemVariants } from "@/lib/animations";
import { Section } from "./Section";

function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);
  const allTechs = SKILLS_CONTENT.tecnologies;
  
  // Desktop splits (2 linhas)
  const deskMid = Math.ceil(allTechs.length / 2);
  const deskRow1 = allTechs.slice(0, deskMid);
  const deskRow2 = allTechs.slice(deskMid);

  // Mobile splits (3 linhas)
  const mobThird1 = Math.ceil(allTechs.length / 3);
  const mobThird2 = Math.ceil(allTechs.length * 2 / 3);
  const mobRow1 = allTechs.slice(0, mobThird1);
  const mobRow2 = allTechs.slice(mobThird1, mobThird2);
  const mobRow3 = allTechs.slice(mobThird2);

  const renderMarqueeRow = (items: typeof allTechs, direction: 'left' | 'right', keyPrefix: string, isDark?: boolean) => {
    const rowItems = [...items, ...items];
    const animateClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

    return (
      <div className="flex overflow-hidden w-full marquee-container mask-image-fade -mx-2">
        <div className={`flex gap-3 w-max ${animateClass} px-3`}>
          {rowItems.map((tech, i) => (
            <Badge 
              key={`${tech.id}-${keyPrefix}-${i}`} 
              variant="default" 
              className={`flex items-center px-3 py-2 w-[220px] shrink-0 ${isDark ? 'bg-dark' : 'transition-colors duration-300'}`}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue shrink-0">
                  {tech.icon ? (
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                  ) : (
                    <span className="text-xs font-bold text-white">{tech.abbrev}</span>
                  )}
                </div>
                <span className="text-sm text-gray font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            </Badge>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Section 
      id="skills"
      className="flex flex-col gap-4 pb-section-md"
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
      
      <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-semibold text-white text-center">Skills</motion.h2>

      {/* Card de tecnologias */}
      <motion.div variants={itemVariants}>
        <Card className="mt-4 md:mt-8 flex flex-col gap-0 px-0 overflow-hidden">
          <div className="flex justify-between items-center px-4 pb-2">
            <span className="text-xs font-semibold tracking-widest text-gray/60 uppercase">
              Tecnologias
            </span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="text-gray hover:text-white transition-colors"
              aria-label={isExpanded ? "Recolher tecnologias" : "Expandir tecnologias"}
            >
              {isExpanded ? <Minimize2 size={16} className="text-cyan"/> : <Maximize2 size={16} />}
            </button>
          </div>
          
          <AnimatePresence mode="wait" initial={false}>
            {!isExpanded ? (
              <motion.div 
                key="marquee"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 pb-4 px-4 overflow-hidden"
              >
                {/* DESKTOP: 2 linhas */}
                <div className="hidden md:flex flex-col gap-3 mt-2">
                  {renderMarqueeRow(deskRow1, 'left', 'desk-1')}
                  {renderMarqueeRow(deskRow2, 'right', 'desk-2', true)}
                </div>

                {/* MOBILE: 3 linhas */}
                <div className="flex md:hidden flex-col gap-3 mt-2">
                  {renderMarqueeRow(mobRow1, 'left', 'mob-1')}
                  {renderMarqueeRow(mobRow2, 'right', 'mob-2', true)}
                  {renderMarqueeRow(mobRow3, 'left', 'mob-3')}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="static"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-3 px-4  mt-2 justify-center sm:justify-center">
                  {allTechs.map((tech, i) => (
                    <Badge 
                      key={`static-${tech.id}-${i}`} 
                      variant="default" 
                      className="flex items-center px-3 py-2 w-auto sm:w-[200px] shrink-0 "
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue shrink-0">
                          {tech.icon ? (
                            <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                          ) : (
                            <span className="text-xs font-bold text-white">{tech.abbrev}</span>
                          )}
                        </div>
                        <span className="text-sm text-gray font-medium whitespace-nowrap">{tech.name}</span>
                      </div>
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>

      {/* Cards de descrição */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
        {[SKILLS_CONTENT.fullstackDescription, SKILLS_CONTENT.uxDescription].map((item) => {
          const isUX = item.title === "UI/UX Design";
          const isFullstack = item.title === "Desenvolvimento Fullstack";

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
    </Section>
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