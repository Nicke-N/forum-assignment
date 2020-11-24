import styled from 'styled-components'

const OutlinedDiv = styled.div `
    border: solid black 2px;
    border-radius: 0.5rem;
    justify-content: center;
`
export const CenteredDiv = styled.div`
    justify-content: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
`

export const ErrorDiv = styled(OutlinedDiv)`
border: solid red 2px;
`

export const OutLinedDiv = styled.div `
border: solid black 2px;
border-radius: 0.5rem;
justify-content: center;
`