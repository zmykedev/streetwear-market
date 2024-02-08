import React from 'react'

// - Derived
import { Steps } from '@/Onboarding/types'

// - Steps
import { Choices } from '../Choices'
import { InputForm } from '../Form'
import { Documents } from '../Documents'
import { Exit } from '../Exit'

export interface Props {
    step?: number
}
/**
 * @description
 * Contain the progress of every step in this section.
 */
export const Wizard: React.FC<Props> = React.memo(({ step }) => {
    /**
     * @description
     * Render memo shallow component that contain the current info.
     */
    const handleRenderComponent = React.useMemo<React.ReactNode>(() => {
        switch (step) {
            case Steps.CHOICE:
                return <Choices />

            case Steps.FORM:
                return <InputForm />

            case Steps.VALIDATE:
                return <Documents />

            case Steps.EXIT:
                return <Exit />

            default:
                return <React.Fragment />
        }
    }, [step])

    return <div>{handleRenderComponent}</div>
})
