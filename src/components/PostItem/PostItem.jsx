import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem(props) {

    return (
        <div className='container-fluid'>
            <Link to={props.url}>{props.title}</Link>
            <p>Author: {props.name}</p>
            {props.sticky &&
                <>
                    <p>Sticky</p>
                </>
            }
        </div>
    )
}
