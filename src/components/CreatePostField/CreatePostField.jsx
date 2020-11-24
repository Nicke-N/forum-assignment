import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ApiKit from '../../data/ApiKit'
import InputField from '../Elements/InputField'
import { PostContext } from '../../contexts/PostContexts'
import Button from '../Elements/Button'
import DropDownList from '../Elements/DropDownList'
import { OutLinedDiv, ErrorDiv } from '../../styles/div'

export default function CreatePostField() {
    const history = useHistory()
    const { categories, setCategories } = useContext(PostContext)
    const [error, setError] = useState(null)
    const apiKit = new ApiKit()

    useEffect(() => {
        if (!categories) {
            apiKit.fetchCategories()
                .then(res => res.json())
                .then(data => setCategories(data.results))
        }
    }, [])

    async function clickHandler(e) {
        e.preventDefault()
        const payload = {
            title: e.target.title.value,
            content: e.target.content.value,
            category: e.target.category.value
        }
        const result =await apiKit.createPost(payload)


        if (result.status === 201 || result.status === 200) {

            history.push('/posts')
        } else {
          
            setError(Object.values(result.data))
        } 
    }

    return (
        <div>
            {error &&
    <ErrorDiv>{error}</ErrorDiv>
}
            <OutLinedDiv>


<form onSubmit={clickHandler}>

<InputField
    name='title'
    type='text'
    required
/>

<InputField
    name='content'
    type='text'
    required
/>
{categories &&
    <DropDownList
        name='category'
        values={categories}
    />
}
<Button
    className='btn btn-primary btn-block'
    text='Create Post'
/>

</form>
</OutLinedDiv>
        </div>
        

    )
}
