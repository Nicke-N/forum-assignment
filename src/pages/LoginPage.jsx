import React from 'react'
import LoginField from '../components/LoginField/LoginField'
import styled, { css } from 'styled-components'

const CenteredDiv= styled.div `
    justify-content: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
`

export default function LoginPage() {
    return (
    
        <CenteredDiv className="h-100 row align-items-center">
            <LoginField />
        </CenteredDiv>

    )
}
