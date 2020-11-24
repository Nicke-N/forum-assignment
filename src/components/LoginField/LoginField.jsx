import React, { useState } from 'react'
import Button from '../Elements/Button'
import InputField from '../Elements/InputField'
import AuthKit from '../../data/AuthKit'
import { useHistory } from 'react-router-dom'
import { OutLinedDiv, ErrorDiv } from '../../styles/div'


export default function LoginField() {
    const history = useHistory()
    const authKit = new AuthKit()
    const [error, setError] = useState(null)
    

    async function clickHandler(e) {
        e.preventDefault()
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const result = await authKit.login(payload)
    
        if (result.status === 201 || result === 200) {

            history.push('/homepage')
        } else {
          
            setError(Object.values(result.data))
        } 
    }

    return (
        <div className='text-center'>
            
                {error &&
                    <ErrorDiv>{error}</ErrorDiv>
                }
           
            <OutLinedDiv>
                <form onSubmit={clickHandler}>

                    <InputField
                        name='email'
                        type='email'
                        required
                    />


                    <InputField
                        name='password'
                        type='password'
                        required
                    />


                    <Button
                        className='btn btn-primary btn-block'
                        text='Login'
                    />

                </form>
            </OutLinedDiv>

        </div>
    )


}
