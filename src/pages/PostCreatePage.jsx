import React from 'react'
import CreatePostField from '../components/CreatePostField/CreatePostField'
import { CenteredDiv } from '../styles/div'
import { Link } from 'react-router-dom'

export default function PostCreatePage() {
    return (
        <div>
            <Link to='/posts'>Back</Link>
            <CenteredDiv className='text-center'>
            <CreatePostField />
            </CenteredDiv>
        </div>
        
    )
}
