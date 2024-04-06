import React, { FormEvent, useState } from 'react'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useTheme } from '../ui/theme-provider'

import '../ui/Menu/index.css'

import '@react-pdf-viewer/core/lib/styles/index.css'

interface ContactProps {
    customTitle?: string
}

export const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
    ({ customTitle = 'Contacto' }, ref) => {
        const [name, setName] = useState('')
        const [type, setType] = useState('')

        const { theme } = useTheme()

        const [message, setMessage] = useState('')

        const handleSubmit = (e: FormEvent) => {
            e.preventDefault()
            const mailtoLink = `mailto:zmaikol399@gmail.com?subject=Contacto: ${name}&body=${message} ${type}`
            window.location.href = mailtoLink
        }
        const color = theme === 'dark' ? 'color-7' : 'color-8'

        return (
            <section
                ref={ref}
                data-aos-duration="2000"
                data-aos="fade-up"
                className="w-full h-screen mb-10"
            >
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 flex flex-col p-5 lg:p-0">
                        <h2 className="text-3xl font-semibold mb-4 lg:mb-8 flex justify-start font-monse">
                            {customTitle}
                        </h2>
                        <p className="text-2xl mb-4 font-light font-roboto text-justify">
                            ¿Estás preparado para llevar tus proyectos al
                            siguiente nivel? Colaborar en iniciativas
                            innovadoras o integrarme a equipos dinámicos me
                            entusiasma. Llena el formulario o mándame un correo
                            electrónico directamente. Hablemos sobre cómo puedo
                            ayudarte a alcanzar tus objetivos.
                        </p>

                        <span className="flex justify-start my-3 text-xl lg:text-3xl font-monse">
                            Enviame un email
                        </span>

                        <form
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 placeholder:font-roboto dark:placeholder-gray-800 dark:bg-white dark:text-black"
                                placeholder="Nombre y apellido"
                                type="text"
                            />
                            <Input
                                onChange={(e) => setType(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 placeholder:font-roboto dark:placeholder-gray-800 dark:bg-white dark:text-black"
                                placeholder="Tipo de consulta"
                                type="text"
                            />

                            <Textarea
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 placeholder:font-roboto dark:placeholder-gray-800 h-24  dark:bg-white dark:text-black"
                                placeholder="Asunto completo"
                            />
                            <Button
                                className={`text-white bg-transparent font-monse btn-hover ${color} `}
                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
)
