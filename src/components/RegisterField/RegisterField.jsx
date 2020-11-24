import React, { useContext, useEffect, useState } from 'react'
import DropDownList from '../Elements/DropDownList'
import InputField from '../Elements/InputField'
import { PostContext } from '../../contexts/PostContexts'
import ApiKit from '../../data/ApiKit'
import Button from '../Elements/Button'
import { useHistory } from 'react-router-dom'
import { OutLinedDiv, ErrorDiv } from '../../styles/div'

export default function RegisterField() {

    const history = useHistory()
    const apiKit = new ApiKit()
    const { countries, setCountries } = useContext(PostContext)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!countries) {
            apiKit.fetchCountries()
                .then(res => res.json())
                .then(data => {
                    let countries = data.results
                    
                    setCountries(countries)
                })
        }
    }, [])

    async function clickHandler(e) {
        e.preventDefault()
        
        const payload = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            country: e.target.country.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        const result = await apiKit.createUser(payload)

        if(result.status === 201) {
            history.push('/login')
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
            {countries &&
                <form onSubmit={clickHandler}>
                    <InputField
                        name='firstName'
                        type='text'
                        required
                    />

                    <InputField
                        name='lastName'
                        type='text'
                        required
                    />

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

                    <DropDownList
                        name='country'
                        values={countries}
                    />

                    <Button 

                        className='btn btn-primary btn-block'
                        text='Register'
                        
                    />
                </form>
            
            }
            </OutLinedDiv>
        </div>
    )
}
