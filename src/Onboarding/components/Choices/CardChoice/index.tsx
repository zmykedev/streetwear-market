import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import PuffLoader from 'react-spinners/PuffLoader'

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
    const [isImageLoaded, setImageLoaded] = useState<boolean>(false)

    useEffect(() => {
        if (props.path) {
            const img = new Image()
            img.src = props.path
            img.onload = () => setImageLoaded(true)
            img.onerror = () => setImageLoaded(false)
        }
    }, [props.path])

    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

    return (
        <div className="flex justify-center items-center">
            <Card
                className={`${cn(
                    'w-[380px] flex justify-center items-center',
                    className
                )} ${disabledClass}`}
                {...props}
            >
                {isImageLoaded ? (
                    <CardHeader>
                        <img
                            width={300}
                            src={props.path}
                            alt={props.alt}
                            loading="lazy"
                        />

                        <CardTitle>{props.title}</CardTitle>
                        <CardDescription>{props.label}</CardDescription>
                    </CardHeader>
                ) : (
                    <PuffLoader
                        color="#ea580c"
                        loading={true}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                )}
            </Card>
        </div>
    )
}
