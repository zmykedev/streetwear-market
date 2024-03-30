import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Gradient } from '../ui/Gradient/gradient'
import avatar from '@/assets/Myke.jpg'

interface HeroProps {
    name?: string
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ name = 'Myke' }, ref) => {
        return (
            <section
                ref={ref}
                className="flex flex-col items-center p-5 m-2 w-full  gap-y-4 lg:gap-y-7"
            >
                <div className="mr-72 lg:mr-[500px] ">
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <Gradient />
                <div className="text-4xl"> Hola soy {name} Developer</div>
                <div className="w-[60%] text-2xl">
                    He estado en la industria por más de 3 años y tengo
                    experiencia trabajando desde pequeñas empresas hasta grandes
                    corporaciones.
                </div>
            </section>
        )
    }
)

HeroSection.displayName = 'HeroSection'
