import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContexts'
import ApiKit from '../../data/ApiKit'

export default function WelcomeMessage() {

    const { setCurrentUser, currentUser } = useContext(UserContext)
    const apiKit = new ApiKit()
    useEffect(() => {
        if (!currentUser) {
            apiKit.fetchCurrentUserInfo()
                .then(res => res.json())
                .then(data => {
                   
                    setCurrentUser(data)
                })
        }
    }, [])
    return (
        <div>
            {currentUser &&
                <div>
                    <div> 
                        Welcome 
                        {' ' + currentUser.firstName + ' ' + currentUser.lastName + ' '}
                        to a big forum!
                    </div>

                </div>
            }
        </div>
    )
}
