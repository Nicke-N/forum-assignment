import React from 'react'

export default function ReplyItem(props) {
    return (
        <div>
            <h6> {props.title }</h6>
            <p>Author: { props.author } at { props.createdAt }</p>
            <p>Message: { props.content }</p>
        </div>
    )
}
