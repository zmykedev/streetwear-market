import styled, { css } from 'styled-components'

// Definimos los breakpoints
const breakpoints = {
    xs: '420px',
    sm: '640px',
    md: '724px',
    lg: '1024px',
    xl: '1280px',
}

export enum InputMode {
    fullCol = 'fullCol',
    semiCol = 'semiCol',
    radioGroup = 'radioGroup',
    checkBox = 'checkBox',
}

interface InputContainerProps {
    typeMode?: InputMode
}

export const InputContainer = styled.div<InputContainerProps>`
    height: 100px; // Altura fija para simplificar, ajusta según necesidad

    // Ajustes responsivos basados en los breakpoints
    @media (max-width: ${breakpoints.xs}) {
        ${(props) =>
            props.typeMode === InputMode.fullCol &&
            css`
                width: 100%;
            `}
    }

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        ${(props) =>
            props.typeMode === InputMode.fullCol &&
            css`
                width: 100%;
            `}// Ejemplo de ajuste para semiCol en un breakpoint
    }

    // Media query para 'md'
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        ${(props) =>
            props.typeMode === InputMode.fullCol &&
            css`
                width: 100%;
            `}
    }
    // Media query para 'lg'
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        ${(props) =>
            props.typeMode === InputMode.fullCol &&
            css`
                width: 100%;
            `}
    }

    // Media query para 'xl'
    @media (min-width: ${breakpoints.lg}) {
        ${(props) =>
            props.typeMode === InputMode.fullCol &&
            css`
                width: 100%;
            `}
    }

    // Repite para otros breakpoints y tipos según sea necesario
`
