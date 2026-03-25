import { useRef, useState } from "react";
import { PROJECT_CONTENT } from "@/constants/ProjectContent";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { Section } from "./Section";

interface ProjectsProps {
    title: string;
}

function Projects({ title }: ProjectsProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const numProjects = PROJECT_CONTENT.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const newIndex = Math.min(
            Math.max(Math.round(latest * (numProjects - 1)), 0),
            numProjects - 1
        );
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    });

    const handleSidebarClick = (index: number) => {
        if (containerRef.current) {
            const containerStart = containerRef.current.offsetTop;
            const containerHeight = containerRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate exactly where this index lies within the scroll distance
            const scrollableDistance = containerHeight - windowHeight;
            const targetProgress = numProjects > 1 ? index / (numProjects - 1) : 0;
            const targetY = containerStart + scrollableDistance * targetProgress;

            window.scrollTo({ top: targetY, behavior: "smooth" });
        }
    };

    return (
        <Section
            id="projects"
            ref={containerRef}
            className="w-full relative"
            style={{
                height: `calc(100vh + ${(numProjects - 1) * 90}vh)`
            }}
        >
            <div className="sticky top-0 h-screen min-h-[300px] w-full flex items-center overflow-hidden">

                <div className="container mx-auto flex flex-col items-center">

                    <motion.h2
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-6xl font-semibold text-white text-center"
                    >
                        {title}
                    </motion.h2>
                    <div className="w-full max-w-8xl flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 max-h-[85vh] lg:max-h-[60vh] mt-4 lg:mt-0">
                        {/* Tab lateral */}
                        <div className="hidden lg:flex flex-col items-start gap-3 mr-10 shrink-0 w-[160px]">
                            {PROJECT_CONTENT.map((project, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={project.id}
                                        onClick={() => handleSidebarClick(idx)}
                                        className={`relative w-[200px] px-2 py-2 transition-colors duration-300 text-left ${isActive ? "text-white cursor-default" : "text-gray hover:text-white"
                                            }`}
                                        style={{ fontSize: '1rem', fontWeight: isActive ? 600 : 400 }}
                                    >
                                        {project.title}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTabUnderline"
                                                className="absolute top-[10%] bottom-[10%] left-0 w-[2px] bg-white rounded-full"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Perspective Image Stack */}
                        <div className="w-full lg:flex-1 relative z-10 flex items-center justify-center h-[480px] sm:h-[500px] lg:h-full lg:w-[500px]">
                            {PROJECT_CONTENT.map((project, idx) => {
                                const isActive = idx === activeIndex;
                                const isPast = idx < activeIndex;
                                const distance = Math.abs(idx - activeIndex);

                                // Base conditions for animation properties
                                let yOffset = "0px";
                                let opacity = 1;
                                let scale = 1;
                                let zIndex = 10 - idx;

                                if (isActive) {
                                    yOffset = "0px";
                                    opacity = 1;
                                    scale = 1;
                                    zIndex = 20;
                                } else if (isPast) {
                                    yOffset = `${distance * -30}px`;
                                    opacity = 1;
                                    scale = 1 - (distance * 0.1);
                                    zIndex = 10;
                                } else {
                                    // Animated Trail (Downwards, fading, scaling)
                                    yOffset = `${distance * 60}px`;
                                    opacity = 1;
                                    scale = 1 - (distance * 0.08);
                                    zIndex = 10 - distance;
                                }

                                return (
                                    <motion.div
                                        key={project.id}
                                        className="absolute will-change-transform"
                                        initial={false}
                                        animate={{
                                            y: yOffset,
                                            opacity: opacity,
                                            scale: scale,
                                            zIndex: zIndex
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                    >
                                        <Card className="p-2 w-[85vw] sm:w-[530px] lg:w-auto bg-dark">
                                            <figure className="w-full h-[200px] sm:h-[250px]">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover rounded-md "
                                                />
                                            </figure>
                                            {/* Informações Visíveis Apenas no Mobile */}
                                            <div className="flex lg:hidden flex-col gap-2 mt-4 px-2 pb-2 text-left">
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                                    <span className="text-sm text-gray/70">{project.category}</span>
                                                </div>
                                                <p className="text-sm text-gray line-clamp-3 mt-1">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {project.badges.map((badge, index) => (
                                                        <Badge variant="secondary" key={index}>{badge}</Badge>
                                                    ))}
                                                </div>
                                                <div className="w-full mt-4">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                        <Button variant="default" size="sm" className="w-full py-5">Ver Projeto</Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Static Content Overlay (Right Panel) */}
                        <div className="hidden lg:flex px-4 lg:px-0 lg:flex-[0.9] relative z-30 min-h-[380px] sm:min-h-[300px] lg:min-h-0 lg:h-[400px] flex-col justify-center pb-8 lg:pb-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15, position: 'absolute' }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="flex flex-col justify-start w-full lg:pr-8"
                                >
                                    <Card className="w-full">
                                        <div className="flex gap-1 flex-col">
                                            <h3 className="text-2xl font-bold">{PROJECT_CONTENT[activeIndex].title}</h3>
                                            <span className="text-sm text-gray/70">{PROJECT_CONTENT[activeIndex].category}</span>
                                        </div>


                                        <p className="text-gray t mt-2">
                                            {PROJECT_CONTENT[activeIndex].description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {PROJECT_CONTENT[activeIndex].badges.map((badge, index) => (
                                                <Badge variant={"secondary"} key={index}>{badge}</Badge>
                                            ))}
                                        </div>
                                        <div className="w-full">
                                            <a href={PROJECT_CONTENT[activeIndex].link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                <Button variant="default" size="md" className="mt-6 w-full">Ver Projeto</Button>
                                            </a>
                                        </div>
                                    </Card>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Projects;