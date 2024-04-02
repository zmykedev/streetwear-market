import React, { FormEvent, useState } from 'react'
import {
    Smartphone,
    MailIcon,
    LocateIcon,
    FileDown,
    FileInput,
} from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useTheme } from '../ui/theme-provider'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet'

import '../ui/Menu/index.css'
import cv from '@/assets/MaikolZapata2024.pdf'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

interface ContactProps {
    customTitle?: string
}

export const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
    ({ customTitle = 'Contacto' }, ref) => {
        const [name, setName] = useState('')
        const [type, setType] = useState('')
        const [size, setSize] = useState<number>(1.5)

        React.useEffect(() => {
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    const width = entry.contentRect.width
                    if (width <= 640) {
                        setSize(0.61)
                    } else {
                        setSize(1.5)
                    }
                }
            })

            observer.observe(document.body) // Asumiendo que quieres observar cambios en el body

            return () => observer.disconnect()
        }, [size])

        const { theme } = useTheme()

        const [message, setMessage] = useState('')

        const handleSubmit = (e: FormEvent) => {
            e.preventDefault()
            const mailtoLink = `mailto:zmaikol399@gmail.com?subject=Contacto ${name}&body=${message} ${type}`
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
                        <h2 className="text-3xl font-semibold mb-8 lg:mb-8 flex justify-start">
                            {customTitle}
                        </h2>
                        <div className="flex flex-col space-y-2 lg:space-y-0  lg:flex-row justify-between mb-4">
                            <div className="flex items-center space-x-3 bg-slate-800 dark:bg-white  p-3 rounded-lg  text-white dark:text-black">
                                <Smartphone />
                                <span>(+569) 8151 - 4796</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-800 dark:bg-white  p-3 rounded-lg  text-white dark:text-black">
                                <MailIcon />
                                <span>zmaikol399@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-800 dark:bg-white  p-3 rounded-lg  text-white dark:text-black">
                                <LocateIcon />
                                <span>Santiago, Chile</span>
                            </div>
                        </div>
                        <div className="flex flex-col mb-7 space-y-3 ">
                            <Sheet>
                                <SheetTrigger
                                    className={`text-white w-full h-12 mx-auto flex justify-center items-center   bg-transparent btn-hover ${color} `}
                                >
                                    <div>Ver curriculum</div>
                                    <FileInput className="text-white size-6 ml-4" />
                                </SheetTrigger>
                                <SheetContent side={'center'}>
                                    <SheetHeader>
                                        <Viewer
                                            fileUrl={cv}
                                            defaultScale={size}
                                        />
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                            <a
                                href={cv}
                                download={'MaikolZapata_CV.pdf'}
                                className="w-full"
                            >
                                <Button
                                    className={`text-white w-full  h-12 mx-auto rounded-full  bg-transparent btn-hover ${color}  `}
                                >
                                    Descargar curriculum
                                    <FileDown className="text-white size-6 ml-4" />
                                </Button>
                            </a>
                        </div>

                        <form
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 dark:placeholder-gray-800 dark:bg-white dark:text-black"
                                placeholder="Nombre y apellido"
                                type="text"
                            />
                            <Input
                                onChange={(e) => setType(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 dark:placeholder-gray-800 dark:bg-white dark:text-black"
                                placeholder="Tipo de consulta"
                                type="text"
                            />

                            <Textarea
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 dark:placeholder-gray-800 h-24  dark:bg-white dark:text-black"
                                placeholder="Asunto completo"
                            />
                            <Button
                                className={`text-white bg-transparent btn-hover ${color} `}
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
