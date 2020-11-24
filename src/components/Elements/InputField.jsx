import React from 'react'
import styled, { css } from 'styled-components'

const RoundedInput = styled.input `
    border-radius: 0.5rem;
`

export default function InputField(props) {

    return (
        <>
            {props.required &&
                <>
                    <div className='col-md-12 text-center'>
                        <label >{props.name}*</label>
                    </div>
                    <div className='col-md-12'>
                        <RoundedInput type={props.type} name={props.name} className='text-center' required />
                    </div>

                </>
            }

            {!props.required &&
                <>
                    <div className='col-md-12'>
                        <label >{props.name}</label>
                    </div>
                    <div className='col-md-12'>
                        <input type={props.type} name={props.name} />
                    </div>
                </>
            }
        </>

    )
}
