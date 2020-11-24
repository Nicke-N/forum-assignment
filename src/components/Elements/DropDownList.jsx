import React, { useState, useEffect } from 'react'
import ApiKit from '../../data/ApiKit'
import Option from './Option'
import styled, { css } from 'styled-components'

const RoundedDropDown = styled.select `
    border-radius: 0.5rem;
`

export default function DropDownList(props) {

    return (
        <>  
            <div className='col-md-12 text-center'>
            <label >{props.name}: </label>
            </div>
            <div className='col-md-12 text-center'>
                
                <RoundedDropDown name={props.name}>
                    {props.values.map((value) => {
                        
                        return <Option key={value.id} value={value.id} name={value.title} />
                    })}
                    
                </RoundedDropDown>
            </div>
            

        </>
    )
}
