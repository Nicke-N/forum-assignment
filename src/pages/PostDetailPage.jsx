import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateReplyField from '../components/CreateReplyField/CreateReplyField'
import ListOfReplies from '../components/ListOfReplies/ListOfReplies'
import ApiKit from '../data/ApiKit'

export default function PostDetailPage(props) {

    const postID = props.match.params.id
    const apiKit = new ApiKit()
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (!post) {
            apiKit.fetchPostDetails(postID)
                .then(res => res.json())
                .then(data => {setPost(data);console.log(data)})
        }

    }, [])

    return (
        <div>
            <Link to='/posts'>View all posts</Link>
            <div className='text-center'>
            
            {post && (
                <div>
                    <div>
                        <h2>{post.title}</h2>
                        <h4>{post.author ? post.author.firstName : 'faceless'}</h4>
                        <h6>Created: {post.createdAt}</h6>
                        <h6>Updated: {post.updatedAt}</h6>
                    </div>
                    <div>
                        <h6><strong>{post.category.title}</strong></h6>
                    </div>
                    <div>
                        {post.content}
                    </div>
                    <br/>
                    <div>
                        Replies: {post.countResponses}
                    </div>

                    <div> 
                        <CreateReplyField postID={postID} />
                    </div>
                    <div>
                        <ListOfReplies postID={postID} />
                    </div>
                    
                </div>
            )}
        </div>
        </div>
        
    )
}
