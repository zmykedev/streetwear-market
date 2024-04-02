import React, { useRef, useEffect, useState } from 'react'
import sticker from '../../assets/stickers.webp'
import otic from '../../assets/ccc.webp'
import landing from '@/assets/Landing.webp'
import './index.css'

interface SkillsProps {
    customTitle?: string
}

export const Proyects = React.forwardRef<HTMLDivElement, SkillsProps>(
    ({ customTitle = 'Proyectos' }, ref) => {
        const sliderRef = useRef<HTMLDivElement>(null)
        const [isPaused, setIsPaused] = useState(false)

        useEffect(() => {
            const interval = setInterval(() => {
                if (sliderRef.current && !isPaused) {
                    const scrollLeft = sliderRef.current.scrollLeft
                    const scrollWidth = sliderRef.current.scrollWidth
                    const clientWidth = sliderRef.current.clientWidth

                    sliderRef.current.scrollTo({
                        left: (scrollLeft + clientWidth) % scrollWidth,
                        behavior: 'auto',
                    })
                }
            }, 5000) // Cambia cada 5 segundos

            return () => clearInterval(interval)
        }, [isPaused])
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

                        <div
                            ref={sliderRef}
                            className="slider-container snap-x scroll-smooth cursor-pointer"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="snap-start shrink-0 w-full flex-none bg-[#1e293b] rounded-lg overflow-hidden mr-4 last:mr-0"
                                    style={{ minWidth: '300px' }}
                                >
                                    {' '}
                                    <a href={project.url}>
                                        <img
                                            alt={`${project.title} project thumbnail`}
                                            className="w-full h-auto"
                                            loading="lazy"
                                            itemType="wepb"
                                            src={project.image}
                                        />
                                        <div className="p-4">
                                            <h3 className="font-semibold text-white">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {project.description}
                                            </p>
                                        </div>{' '}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
)

const projects = [
    {
        title: 'Integra Negocio',
        description:
            'Promovemos la evolución digital de la Corporación Nacional de Capacitación al integrar sus aplicaciones en una sola plataforma. El comienzo de una nueva era en nuestros procesos administrativos y comerciales está marcado por este avance hacia la simplicidad y eficiencia.',
        image: otic,
        url: 'https://sucursalvirtual.ccc.cl/',
    },
    {
        title: 'Onboarding StickerSellers',
        description:
            'Pagina de onboarding para la selección de prospectos para venta de stickers con financiamiento.',
        image: sticker,
        url: 'http://onboarding.reddevalor.cl/',
    },
    {
        title: 'Red de Valor',
        description:
            'Startup chilena que busca impulsar el crecimiento de posibles prospectos en el mundo de las ventas digitales.',
        image: landing,
        url: 'https://luminous-peony-e84c6d.netlify.app/',
    },
]
