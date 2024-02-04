import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

export type CardProps = React.ComponentProps<typeof Card> & {
    title?: string
    label?: string
    path?: string
    alt?: string
    disabled?: boolean
}

export const CardChoice: React.FunctionComponent<CardProps> = ({
    className,
    ...props
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

    useEffect(() => {
        if (props.path) {
            const img = new Image()
            img.src = props.path
            img.onload = () => setIsImageLoaded(true)
            img.onerror = () => setIsImageLoaded(false)
        }
    }, [props.path])

    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

    const variants = {
        start: {
            scale: 0,
            borderRadius: '50%',
        },
        end: {
            scale: 1,
            borderRadius: '0%',
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }
    return (
        <div className="flex justify-center items-center">
            <Card
                className={`${cn(
                    'w-[380px] flex justify-center items-center',
                    className
                )} ${disabledClass}`}
                {...props}
            >
                <CardHeader>
                    <motion.div
                        custom={isImageLoaded}
                        initial="start"
                        animate="end"
                        variants={variants}
                    >
                        <img
                            width={300}
                            src={props.path}
                            alt={props.alt}
                            loading="lazy"
                        />
                    </motion.div>

                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.label}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
