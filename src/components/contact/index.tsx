import React, { FormEvent, useState } from 'react'
import { Smartphone, MailIcon, LocateIcon } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useTheme } from '../ui/theme-provider'
import '../ui/Menu/index.css'

interface ContactProps {
    customTitle?: string
}

export const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
    ({ customTitle = 'Contact' }, ref) => {
        const [name, setName] = useState('')

        const { theme } = useTheme()

        const [message, setMessage] = useState('')

        const handleSubmit = (e: FormEvent) => {
            e.preventDefault()
            const mailtoLink = `mailto:zmaikol399@gmail.com?subject=Contact from ${name}&body=${message}`
            window.location.href = mailtoLink
        }
        const color = theme === 'dark' ? 'color-7' : 'color-8'
        return (
            <section
                ref={ref}
                data-aos-duration="2000"
                data-aos="fade-up"
                className="w-full h-screen"
            >
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 flex flex-col p-5 lg:p-0">
                        <h2 className="text-3xl font-semibold mb-4 lg:mb-20 flex justify-start">
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
                        <form
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 dark:placeholder-gray-800 dark:bg-white dark:text-black"
                                placeholder="Nombre"
                                type="text"
                            />

                            <Textarea
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-slate-800 text-white placeholder-gray-500 dark:placeholder-gray-800 h-24  dark:bg-white dark:text-black"
                                placeholder="Mensaje"
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
