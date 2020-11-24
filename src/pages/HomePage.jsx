import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage'
import styled from 'styled-components'

const List = styled.ul`
    list-style-type: none;
`

export default function HomePage() {
    
    return (
        <div>
            <List>
                <li>
                    <Link to='/posts'>View all posts</Link>
                </li>
                <li>
                    <Link to='/createpost'>Create a post</Link>
                </li>
            </List>
            
            
            <WelcomeMessage />

        </div>

    )
}
