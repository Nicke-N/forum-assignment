import React, { useContext, useEffect } from 'react'
import ApiKit from '../../data/ApiKit'
import { PostContext } from '../../contexts/PostContexts'
import PostItem from '../PostItem/PostItem'

export default function ListOfPosts() {

    const {postsList, setPostsList} = useContext(PostContext)
    const apiKit = new ApiKit()

    useEffect(() => {
        if(!postsList) {
            apiKit.fetchPostList()
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setPostsList(data.results)
                
            })
        }
    }, [])

    return (
        <div>
            {postsList && postsList.map((post, index) => {
            
                const name = post.author ? post.author.firstName  : 'faceless' 
                const url = `/posts/${post.id}`
                const sticky = post.isPinned
                
                return <PostItem key={index} title={post.title} url={url} name={name} sticky={sticky}/>
            })

            }
        </div>
    )
}
