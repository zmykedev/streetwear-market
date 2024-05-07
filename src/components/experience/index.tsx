import React from 'react'

import ccc from '@/assets/otic.jpeg'

import valor from '@/assets/reddevalor.jpg'
import xbrein from '@/assets/xbrein.jpeg'
import proyecte from '@/assets/proyecte.jpeg'

const dummyData = [
    {
        company: 'Red de Valor',
        role: 'Senior Frontend Engineer',
        period: '2023-Actualidad',
        img: valor,
    },
    {
        company: 'Capacitación de la camara chilena de la construccion',
        role: 'Senior FullStack Developer',
        period: '2023-Actualidad',
        img: ccc,
    },
    {
        company: 'Proyecte',
        role: 'FullStack Developer',
        period: '2022-2023',
        img: proyecte,
    },
    {
        company: 'Xbrein',
        role: 'FullStack Developer',
        period: '2022-2023',
        img: xbrein,
    },
]

interface ExperienceProps {
    customTitle?: string
}

export const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
    ({ customTitle = 'Experiencia' }, ref) => {
        return (
            <section ref={ref}>
                <div
                    data-aos="fade-up-right"
                    data-aos-duration="2000"
                    className="w-full "
                >
                    <div className="flex justify-center">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <h2 className="text-3xl font-semibold p-5 lg:p-0 mb-2 flex justify-start font-monse">
                                {customTitle}
                            </h2>
                            <div className="mx-auto">
                                {dummyData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row w-full items-start flex-grow  mb-4 p-4 "
                                    >
                                        <div className="flex justify-start">
                                            <img
                                                src={item.img}
                                                alt="logo"
                                                className="w-20 h-20 mr-4 bg-black dark:bg-white rounded-lg"
                                            />{' '}
                                            {/* Ajusta el tamaño de la imagen */}
                                            <div className=" flex flex-col flex-grow justify-start mt-4 ">
                                                <h3 className="font-bold text-lg self-start font-monse">
                                                    {item.role}
                                                </h3>
                                                <p className="text-gray-400  flex justify-start font-roboto">
                                                    {item.company},{' '}
                                                    {item.period}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
)
