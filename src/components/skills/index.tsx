import React from 'react'
import { Badge } from '../ui/badge'

// Definimos una interfaz para el tipo de habilidad.
interface Skill {
    id: number
    name: string
}

// Lista de habilidades.
const skills: Skill[] = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'CSS' },
    { id: 4, name: 'JavaScript' },
    { id: 5, name: 'TypeScript' },
    { id: 6, name: 'React.js' },
    { id: 7, name: 'TailwindCSS' },
    { id: 8, name: 'Diseño UI/UX' },
    { id: 9, name: 'Desarrollo Web' },
    { id: 10, name: 'CI/CD' },
    { id: 11, name: 'Git' },
    { id: 12, name: 'Pensamiento Critico' },
    { id: 15, name: 'Capacidad de Adaptación' },
    { id: 13, name: 'Comunicador Efectivo' },
    { id: 14, name: 'Aprendizaje Continuo' },
]

interface SkillsProps {
    customTitle?: string
}

export const Skills = React.forwardRef<HTMLDivElement, SkillsProps>(
    ({ customTitle = 'Habilidades' }, ref) => {
        return (
            <section
                ref={ref}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full"
            >
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h2 className="text-3xl font-semibold p-5 lg:p-0 flex justify-start mb-4">
                            {customTitle}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            {skills.map((skill) => (
                                <Badge
                                    key={skill.id}
                                    className="rounded-xl text-2xl lg:text-4xl leading-9"
                                    variant="secondary"
                                >
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
)
