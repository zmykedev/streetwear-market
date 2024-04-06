import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTheme } from '../ui/theme-provider'
import { Gradient } from '../ui/Gradient/gradient'
import avatar from '@/assets/Myke.jpg'
import { FileDown, FileInput, Linkedin } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet'
import cv from '@/assets/MaikolZapata2024.pdf'
import { Viewer } from '@react-pdf-viewer/core'
import linkedinQr from '@/assets/linkedinqr.png'

interface HeroProps {
    name?: string
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ name = 'Myke' }, ref) => {
        const { theme } = useTheme()
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

        const color = theme === 'dark' ? 'color-7' : 'color-8'
        return (
            <section
                ref={ref}
                className="flex flex-col items-center p-5 m-2 w-full  gap-y-4 lg:gap-y-7 h-screen "
            >
                <div className="mr-72 lg:mr-[500px] ">
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <Gradient />
                <div className="flex xl:flex-row w-full lg:w-[35.8%] flex-col mb-2 lg:space-x-3">
                    <a
                        className="hidden xl:flex"
                        href="https://www.linkedin.com/in/mzapatadvlpr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="rounded-xl"
                            src={linkedinQr}
                            width={160}
                            height={150}
                            alt="qr"
                        />
                    </a>
                    <div className=" flex flex-col  w-full xl:w-[50%] space-y-4 justify-center ">
                        <a
                            href={cv}
                            download={'MaikolZapata_CV.pdf'}
                            className="w-full"
                        >
                            <Button
                                className={`text-white lg:hidden  font-monse font-normal w-full  h-12 mx-auto rounded-full  bg-transparent btn-hover color-9  `}
                            >
                                Ver linkedin
                                <Linkedin className="text-white size-6 ml-4" />
                            </Button>
                        </a>
                        <Sheet>
                            <SheetTrigger
                                className={`text-white w-full h-12 font-monse font-normal mx-auto flex justify-center items-center   bg-transparent btn-hover ${color} `}
                            >
                                Ver curriculum
                                <FileInput className="text-white size-6 ml-4" />
                            </SheetTrigger>
                            <SheetContent side={'center'}>
                                <SheetHeader>
                                    <Viewer fileUrl={cv} defaultScale={size} />
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <a
                            href={cv}
                            download={'MaikolZapata_CV.pdf'}
                            className="w-full"
                        >
                            <Button
                                className={`text-white  font-monse font-normal w-full  h-12 mx-auto rounded-full  bg-transparent btn-hover ${color}  `}
                            >
                                Descargar curriculum
                                <FileDown className="text-white size-6 ml-4" />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex lg:w-[70%] flex-col space-y-2 lg:space-y-6">
                    <span className="text-xl lg:text-4xl font-monse font-medium">
                        {' '}
                        Hola soy {name} Developer
                    </span>
                    <span className="text-xl lg:text-3xl font-monse">
                        He estado en la industria por más de 3 años y tengo
                        experiencia trabajando desde pequeñas empresas hasta
                        grandes corporaciones.
                    </span>
                </div>
            </section>
        )
    }
)

HeroSection.displayName = 'HeroSection'
