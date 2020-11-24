import React from 'react'
import { OutLinedDiv } from '../../styles/div'
import Button from '../Elements/Button'
import InputField from '../Elements/InputField'
import ApiKit from '../../data/ApiKit'

export default function CreateReplyField(props) {

    const apiKit = new ApiKit()

    async function clickHandler(e) {
        e.preventDefault()
        const postID = props.postID

        const payload = {
            title: e.target.title.value,
            content: e.target.content.value,
            parent: postID
        }
        
        const result = await apiKit.createReply(payload)
        
        if(result.status === 201 || result.status === 200) {
            
            setTimeout(() => {
                window.location.reload();
            }, 5000)
            
        } 
       
    }

    return (
        <OutLinedDiv className='container'>
            <form onSubmit={clickHandler}>
                <InputField 
                type='text'
                name='title'
                required
                />
                <InputField 
                type='text'
                name='content'
                required
                />
                <Button 
                className='btn btn-primary btn-block'
                text='Reply'
                />
            </form>
        </OutLinedDiv>
    )
}
