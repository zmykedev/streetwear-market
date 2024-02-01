import { createContext } from 'react'

import { Steps } from '@/Onboarding/types'

export type WizardContextProperties = {
    onExit?: () => void
    onBackStep?: () => void
    onNextStep?: () => void
    onSettled?: (step: number) => void
    step?: number
    info?: Form
    uuid?: string
    choice?: string
    updateUuid?: (newUuid: string) => void
    update?: (key: keyof Form, value: Form[keyof Form]) => void
    synchronize?: (
        key: keyof RefetchStatus,
        value: RefetchStatus[keyof RefetchStatus]
    ) => void
}

export type RefetchStatus = Partial<{
    sence: boolean
    search: boolean
    schedules: boolean
}>

export type Form = {
    step?: Steps
    choice?: string
    uuid?: string
}

export const WizardContext = createContext<WizardContextProperties>({})
