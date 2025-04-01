import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const StyledInput = styled.input`
    border: 1px solid #36394A;
    border-radius: 100px;
    width: 244px;
    height: 48px;
    background-color: #0D0D12;
    color: #C1C7D0;
`

const StyledLabel = styled.label`

`


const Input = ({ name, label, placeholder, icon, type = "text" }) => {
    const { register } = useFormContext()
    return (
        <InputContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput
                {...register(name)}
                placeholder={placeholder}
                type={type}></StyledInput>

        </InputContainer>
    )
}

export default Input