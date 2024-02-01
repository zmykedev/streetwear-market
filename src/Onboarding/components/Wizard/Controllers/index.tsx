import { Button } from '@/components/ui/button'

interface Props {
    onNextStep?: () => void
    onBackStep?: () => void
    isNextDisabled?: boolean
    isBackHidden?: boolean
    isFinish?: boolean
}

export const Controllers: React.FunctionComponent<Props> = ({
    onNextStep,
    onBackStep,
    isNextDisabled,
    isBackHidden,
    isFinish,
}) => {
    const justifyContentClass = isBackHidden ? 'justify-end' : 'justify-between'

    const backHidden = isBackHidden ? 'opacity-0' : 'opacity-1'

    return (
        <div className={`flex ${justifyContentClass} m-5`}>
            <Button
                className={`bg-orange-600 hover:bg-orange-500 ${backHidden} `}
                onClick={onBackStep}
            >
                Volver
            </Button>

            <Button
                className="bg-orange-600 hover:bg-orange-500"
                onClick={onNextStep}
                disabled={isNextDisabled}
            >
                {isFinish ? 'Finalizar' : 'Continuar'}
            </Button>
        </div>
    )
}
