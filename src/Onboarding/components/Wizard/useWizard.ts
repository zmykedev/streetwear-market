import { useContext } from 'react'

import { WizardContext } from './context'

export function useWizard() {
    const wizard = useContext(WizardContext)
    return wizard
}
