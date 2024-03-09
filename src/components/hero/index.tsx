import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Gradient } from '../ui/Gradient/gradient'

export const HeroSection: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col p-5 m-2 gap-y-3">
            <Avatar>
                <AvatarImage src="/src/assets/Myke.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Gradient /> <div>Hi i'am Myke Developer</div>
        </div>
    )
}
