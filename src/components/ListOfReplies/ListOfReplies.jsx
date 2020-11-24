import React, { useEffect, useState } from 'react'
import ApiKit from '../../data/ApiKit'
import ReplyItem from '../ReplyItem/ReplyItem'

export default function ListOfReplies(props) {

    const apiKit = new ApiKit()
    const [replies, setReplies] = useState(null)

    useEffect(() => {
        if(!replies) {
            apiKit.fetchPostReplies(props.postID)
                .then(res => res.json())
                .then(data => setReplies(data.results))
        }
        
    }, [])

    return (
        <div>
            {replies && replies.map((reply, index) => {
                return <ReplyItem 
                key={index}
                author={reply.author ? reply.author.firstName : 'faceless'} 
                content={reply.content}
                title={reply.title}
                createdAt={reply.createdAt}
                />
            })}
        </div>
    )
}
