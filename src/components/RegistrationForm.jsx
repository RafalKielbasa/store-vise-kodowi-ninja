import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import { styled } from "styled-components"
import Input from "./Input"

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        color: #C1C7D0;
`

const StyledForm = styled.form`
    color: #C1C7D0;
`

const SubmitButton = styled.button`
    padding: 12px 16px;
    background-color: #272835
    border: none;
    border-radius: 100px;
`

const StyledH2 = styled.h2`
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -2%;
    font-weight: 500;
`
const StyledH3 = styled.h3`
    font-size: 16px;
    line-height: 160%;
    font-weight: 500;
`

const RegistrationForm = () => {
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    })

    const { handleSubmit } = methods

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FormContainer>
            <StyledH2>Create Account</StyledH2>
            <StyledH3>Please input to your account</StyledH3>
            <FormProvider {...methods}>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <Input name={"firstName"}
                        placeholder="Input your first name"
                        label="First Name" />
                    <Input name={"lastName"}
                        placeholder="Input your last name"
                        label="Last Name" />
                    <Input name={"email"} type={"email"} placeholder="user@gmail.com" label="Email" />
                    <Input name={"password"} type={"password"} placeholder="your password" label="Password" />
                    <SubmitButton type="submit">Continue</SubmitButton>
                </StyledForm>
            </FormProvider>
        </FormContainer>)
}

export default RegistrationForm