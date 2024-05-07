import React, { useState, useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTheme } from '../ui/theme-provider'
import { Gradient } from '../ui/Gradient/gradient'
import avatar from '@/assets/Myke.jpg'
import { FileDown, FileInput, Linkedin } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet'
import cv from '@/assets/MaikolZapata2024.pdf'
import mykelarge from '@/assets/mykelarge.jpg'
import { Viewer } from '@react-pdf-viewer/core'
import linkedinQr from '@/assets/linkedinqr.png'

interface HeroProps {
    name?: string
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ name = 'Myke' }, ref) => {
        const qrRef = useRef<HTMLImageElement>(null) // Creamos una referencia para el elemento que vamos a clickear
        const { theme } = useTheme()
        const [size, setSize] = useState<number>(1.5)

        useEffect(() => {
            // Definición del event handler de clic
            const handleClick = () => {
                window.open(
                    'https://www.linkedin.com/in/mzapatadvlpr/',
                    '_blank',
                    'noopener,noreferrer'
                )
            }

            // Event listener para el QR
            const currentQrRef = qrRef.current
            if (currentQrRef) {
                currentQrRef.addEventListener('click', handleClick)
            }

            // Callback de ResizeObserver con el tipo anotado
            const handleResize = (entries: ResizeObserverEntry[]) => {
                for (const entry of entries) {
                    const width = entry.contentRect.width
                    const newSize = width <= 640 ? 0.61 : 1.5
                    setSize(newSize)
                }
            }

            // Instancia de ResizeObserver
            const observer = new ResizeObserver(handleResize)
            observer.observe(document.body)

            // Limpieza de efectos
            return () => {
                if (currentQrRef) {
                    currentQrRef.removeEventListener('click', handleClick)
                }
                observer.disconnect()
            }
        }, [])

        const color = theme === 'dark' ? 'color-7' : 'color-8'

        return (
            <TooltipProvider>
                <section
                    ref={ref}
                    className="flex flex-col items-center p-5 m-2 w-full  gap-y-4 lg:gap-y-7"
                >
                    <div className="mr-72  lg:mr-[500px] ">
                        <Sheet>
                            <SheetTrigger>
                                <Avatar>
                                    <AvatarImage src={avatar} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </SheetTrigger>
                            <SheetContent side={'center'}>
                                <SheetHeader>
                                    <div className="flex justify-center">
                                        <img
                                            src={mykelarge}
                                            width={500}
                                            alt="large"
                                        />
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Gradient />

                    <div className="flex xl:flex-row w-full xl:justify-center lg:w-[800px] xl:h-[30%] flex-col space-x-2 ">
                        <div className="xl:w-[30%]  ">
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        ref={qrRef}
                                        className="border-2 border-[#404040] dark:border-[#823098] rounded-xl hidden xl:flex cursor-pointer"
                                        src={linkedinQr}
                                        width={200}
                                        height={120}
                                        alt="LinkedIn QR"
                                        loading="lazy"
                                    />
                                </TooltipTrigger>
                                <TooltipContent className="bg-slate-800 dark:bg-white  text-white  dark:text-black">
                                    <p>Linkedin Profile</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <div className=" flex flex-col  w-full xl:w-[50%] space-y-4 justify-center  ">
                            <a
                                href="https://www.linkedin.com/in/mzapatadvlpr/"
                                className="w-full"
                            >
                                <Button
                                    className={`text-white lg:hidden   font-monse font-normal w-full  h-12 mx-auto rounded-full  bg-transparent btn-hover color-9  `}
                                >
                                    Ver linkedin
                                    <Linkedin className="text-white size-6 ml-4" />
                                </Button>
                            </a>
                            <Sheet>
                                <SheetTrigger
                                    className={`text-white xl:text-2xl w-full h-12 xl:h-16 font-monse font-normal mx-auto flex justify-center items-center   bg-transparent btn-hover ${color} `}
                                >
                                    Ver curriculum
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
                                    className={`text-white xl:text-2xl  font-monse font-normal w-full  h-12 xl:h-16 mx-auto rounded-full  bg-transparent btn-hover ${color}  `}
                                >
                                    Descargar curriculum
                                    <FileDown className="text-white size-6 ml-4" />
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex lg:w-[70%] xl:w-[100%] flex-col space-y-2 lg:space-y-6">
                        <span className="text-xl lg:text-5xl xl:text-5xl font-monse font-medium">
                            {' '}
                            Hola soy {name} Developer
                        </span>
                        <span className="text-xl lg:text-4xl xl:text-4xl   font-monse">
                            He estado en la industria por más de 3 años y tengo
                            experiencia trabajando desde pequeñas empresas hasta
                            grandes corporaciones.
                        </span>
                    </div>
                </section>
            </TooltipProvider>
        )
    }
)

HeroSection.displayName = 'HeroSection'
