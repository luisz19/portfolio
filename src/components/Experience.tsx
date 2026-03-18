import { useRef } from "react"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { EXPERIENCE_CONTENT } from "@/constants/experienceContent"
import { motion, useScroll, useTransform } from "framer-motion"
import { itemVariants } from "@/lib/animations"

function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const timelineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <section 
            id="experience"
            ref={containerRef}
            className="w-full relative py-section"
        >
            <div className="container mx-auto max-w-4xl relative">
                <motion.h2 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-6xl font-semibold text-white text-center mb-24"
                >
                    Experiência
                </motion.h2>

                <div className="relative flex flex-col items-start w-full">
                    
                    {/* Timeline Line */}
                    <div className="absolute left-[23px] top-6 bottom-0 w-[2px] bg-white-subtle ml-[-1px] z-0">
                        <motion.div 
                            className="w-full h-full bg-white origin-top"
                            style={{ scaleY: timelineScaleY }}
                        />
                    </div>

                    <div className="w-full flex flex-col relative z-10 ">
                        {EXPERIENCE_CONTENT.map((exp, idx) => {
                            const isLast = idx === EXPERIENCE_CONTENT.length 
                            
                            return (
                                <div 
                                    key={exp.id}
                                    className="sticky w-full flex items-start"
                                    style={{ 
                                        top: `calc(20vh + ${idx * 40}px)`, 
                                        marginBottom: isLast ? '0' : '10vh'
                                    }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="relative flex items-center justify-center w-[46px] shrink-0 pt-6">
                                        <div className="w-4 h-4 rounded-full border-2 border-white bg-navy z-20" />
                                    
                                        <div className="absolute right-12 whitespace-nowrap text-xl text-gray/70 font-light opacity-100 pr-4">
                                            {exp.date.split(' - ')[0]}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="ml-4 w-full">
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ margin: "-100px", once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                        >
                                            <Card className="p-6">
                                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                                <p className="text-gray text-sm">{exp.date}</p>
                                                <ul className="list-disc list-inside mt-2 text-gray">
                                                    {exp.description.split('\n').filter(Boolean).map((line, i) => (
                                                        <li key={i}>{line}</li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {exp.badges.map((badge, index) => (
                                                        <Badge key={index} variant="secondary">{badge}</Badge>
                                                    ))}
                                                </div>
                                            </Card>
                                        </motion.div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience