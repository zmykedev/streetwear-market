export type ChoicesProps = {
    onChoiceSelected?: (selectedId: Choice, uuid: string) => void
}

export enum Choice {
    Default = '',
    With = 'WITH',
    Without = 'WITHOUT',
}
