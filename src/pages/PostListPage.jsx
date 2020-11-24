import React from 'react'
import ListOfPosts from '../components/ListOfPosts/ListOfPosts'
import { Link } from 'react-router-dom'


export default function PostListPage() {

                                        
    return (
        <div>
            <Link to='/createpost'>Create a post</Link>
            <div className='text-center'>
                <ListOfPosts />
            </div>
           
        </div>
    )
}
