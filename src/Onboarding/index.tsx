import React from 'react'

import { Steps } from './types'

import { Wizard } from './components/Wizard'
import {
    WizardContext,
    WizardContextProperties,
    Form,
} from './components/Wizard/context'

export const Onboarding: React.FunctionComponent = () => {
    /**
     * @description
     * Manage and set the steps.
     */
    const [step, setStep] = React.useState<Steps>(Steps.CHOICE)

    const [uuid, setUuid] = React.useState<string | undefined>(undefined) // Cambia 'null' a 'undefined'

    const [choice, setChoice] = React.useState<string | undefined>(undefined)

    const update = React.useCallback(
        (key: keyof Form, value: Form[keyof Form]) => {
            if (key === 'uuid') {
                setUuid(value as string) // Asegúrate de que esto actualiza el estado de uuid
            }

            if (key === 'choice') {
                setChoice(value as string)
            }
            // Implementa otras actualizaciones de estado según sea necesario
        },
        []
    ) // Dependencias vacías significan que 'update' no

    /**
     * @description
     * Handles the action when the user proceeds to the next step.
     */
    const onNextStep = React.useCallback(() => {
        switch (step) {
            case Steps.CHOICE:
                return setStep(Steps.FORM)

            case Steps.FORM:
                return setStep(Steps.EXIT)

            // case Steps.VALIDATE:
            //     return setStep(Steps.EXIT)

            default:
                return null
        }
    }, [step])

    /**
     * @description
     * Handles the action when the user backs to one step.
     */
    const onBackStep = React.useCallback(() => {
        switch (step) {
            case Steps.VALIDATE:
                return setStep(Steps.FORM)

            case Steps.FORM:
                return setStep(Steps.CHOICE)

            default:
                return null
        }
    }, [step])

    const onSettled = React.useCallback((step: number) => {
        setStep(step)
    }, [])

    /**
     * @description
     * Controllers memoizing to increase perfomance on the context.
     */
    const controllers = React.useMemo<WizardContextProperties>(() => {
        return {
            step,
            uuid,
            choice,
            update,
            onBackStep,
            onNextStep,
            onSettled,
        }
    }, [step, choice, uuid, update, onBackStep, onNextStep, onSettled])

    return (
        <WizardContext.Provider value={controllers}>
            <Wizard step={step} />
        </WizardContext.Provider>
    )
}
