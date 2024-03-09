import { AspectRatio } from '@/components/ui/aspect-ratio'
import './gradient.css'

export function Gradient() {
    return (
        <AspectRatio ratio={16 / 9} className="bg-muted">
            <div className="soft-light"></div>
        </AspectRatio>
    )
}
