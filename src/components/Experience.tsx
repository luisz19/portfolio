import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { EXPERIENCE_CONTENT } from "@/constants/experienceContent"

function Experience() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-6xl font-semibold text-white text-center">Experiência</h2>
            <div className="space-y-8 mt-8">
                {EXPERIENCE_CONTENT.map((exp) => (
                    <Card key={exp.id} className="p-6">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray text-sm">{exp.date}</p>
                        <ul className="list-disc list-inside mt-2 text-gray">
                            {exp.description.split('\n').map((line, i) => (
                                <li key={i}>{line}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {exp.badges.map((badge, index) => (
                                <Badge key={index} variant="secondary">{badge}</Badge>
                            ))}
                        </div>
                    </Card>
                ))}
                
            </div>
        </section>
    )
}

export default Experience