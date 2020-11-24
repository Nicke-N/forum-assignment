import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') ? (
                    <Redirect to={'/login'} />
                ) : (
                        <Component {...props}/>
                    )
            }
        />
    )
}