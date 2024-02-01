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
    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

    return (
        <div className="flex justify-center items-center">
            <Card
                className={`${cn('w-[380px]', className)} ${disabledClass}`}
                {...props}
            >
                <CardHeader>
                    <img width={300} src={props.path} alt={props.alt} />
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.label}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
