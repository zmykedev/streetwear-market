import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const messages = [
    'Recibe entre 48 y 72 horas hábiles en Región Metropolitana',
    'Compra hasta en 6 cuotas sin intereses',
    'Nuevas ofertas hasta 40% OFF',
]

export function CarouselDemo() {
    return (
        <Carousel className="w-[280px]">
            <CarouselContent>
                {messages.map((message, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <span className="text-sm font-semibold text-center">
                                        {message}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
