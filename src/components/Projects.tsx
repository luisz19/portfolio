import { PROJECT_CONTENT } from "@/constants/ProjectContent";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";

interface ProjectsProps {
    title: string;
}

function Projects({title}: ProjectsProps) {


    return (
        <section className="flex flex-col py-section">
            <h2 className="text-6xl font-semibold text-white text-center">{title}</h2>

            <Tabs
                defaultValue={PROJECT_CONTENT[0].title}
                orientation="vertical"
                className="flex flex-row items-center gap-12 mt-8 w-full"
            >
                {/* Tab lateral */}
                <TabsList className="flex flex-col items-start gap-1 shrink-0">
                    {PROJECT_CONTENT.map((project) => (
                        <TabsTrigger key={project.id} value={project.title}>
                            {project.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Conteúdo centralizado */}
                <div className="flex-1 grid">
                    {PROJECT_CONTENT.map((project) => (
                        <TabsContent forceMount key={project.id} value={project.title} className="col-start-1 row-start-1 flex gap-6 w-full data-[state=inactive]:invisible data-[state=inactive]:pointer-events-none">
                            <Card className="p-2 flex shrink-0">
                                <figure className="w-[500px]">
                                    <img src={project.image} alt={project.title} className="rounded-md object-cover" />
                                </figure>
                            </Card>

                            <div className="flex flex-col justify-start">
                                <div className="flex gap-2 items-start justify-between">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <span className="text-sm text-gray/70">{project.category}</span>
                                </div>
                                <p className="text-gray text-lg mt-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.badges.map((badge, index) => (
                                        <span key={index} className="bg-gray/20 text-gray px-2 py-1 rounded">{badge}</span>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </div>
            </Tabs>
        </section>
    )
}

export default Projects