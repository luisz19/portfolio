import { useRef, useState } from "react";
import { PROJECT_CONTENT } from "@/constants/ProjectContent";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { itemVariants } from "@/lib/animations";

interface ProjectsProps {
    title: string;
}

function Projects({ title }: ProjectsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    
    const [activeIndex, setActiveIndex] = useState(0);
    const numProjects = PROJECT_CONTENT.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Find the closest index based on how far down the container we've scrolled
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
        <section 
            id="projects"
            ref={containerRef}
            className="w-full relative"
            style={{ 
                height: `calc(100vh + ${(numProjects - 1) * 80}vh)` 
            }}
        >
            <div className="sticky top-0 h-screen min-h-[800px] w-full flex items-center overflow-hidden py-section">
                
                <div className="container mx-auto h-full flex flex-col items-center">
                    <motion.h2 
                        variants={itemVariants} 
                        initial="hidden" 
                        whileInView="visible" 
                        className="text-6xl font-semibold text-white text-center shrink-0"
                    >
                        {title}
                    </motion.h2>

                    <div className="w-full max-w-6xl flex-1 flex flex-row items-center gap-16 mt-12 mb-8 max-h-[80vh]">
                        {/* Tab lateral */}
                        <div className="flex flex-col items-start gap-3 shrink-0 w-[160px]">
                            {PROJECT_CONTENT.map((project, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={project.id}
                                        onClick={() => handleSidebarClick(idx)}
                                        className={`relative px-4 py-2 transition-colors duration-300 text-left ${
                                            isActive ? "text-white cursor-default" : "text-gray hover:text-white"
                                        }`}
                                        style={{ fontSize: '1.15rem', fontWeight: isActive ? 600 : 400 }}
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
                        <div className="flex-1 relative flex items-center justify-center h-full w-[500px]">
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
                                    zIndex = 20; // Active is highest
                                } else if (isPast) {
                                    // Animated Out (Upwards)
                                    yOffset = "-180px";
                                    opacity = 0;
                                    scale = 0.95;
                                    zIndex = 10; 
                                } else {
                                    // Animated Trail (Downwards, fading, scaling)
                                    yOffset = `${distance * 60}px`;
                                    opacity = 1 - (distance * 0.45);
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
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1] // Custom snappy spring easing
                                        }}
                                    >
                                        <Card className="p-2 flex shrink-0">
                                            <figure className="w-[500px] h-[300px] object-cover rounded-md overflow-hidden">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title} 
                                                    className="w-full h-full object-cover rounded-md transition-transform duration-700 hover:scale-105" 
                                                />
                                            </figure>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Static Content Overlay (Right Panel) */}
                        <div className="flex-[0.9] relative h-[400px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15, position: 'absolute' }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="flex flex-col justify-start w-full pr-8"
                                    >
                                    <Card className="p-4">
                                    <div className="flex gap-2 items-start justify-between">
                                        <h3 className="text-2xl font-bold">{PROJECT_CONTENT[activeIndex].title}</h3>
                                        <span className="text-sm text-gray/70">{PROJECT_CONTENT[activeIndex].category}</span>
                                    </div>


                                        <p className="text-gray text-lg mt-2">
                                            {PROJECT_CONTENT[activeIndex].description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {PROJECT_CONTENT[activeIndex].badges.map((badge, index) => (
                                                <Badge variant={"secondary"} key={index}>{badge}</Badge>
                                            ))}
                                        </div>
                                        <div className="w-full">
                                            <Button variant="default" size="md" className="mt-6 w-full">Ver Projeto</Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;