import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { styled } from 'styled-components'
import { Input } from './Input'
import { HeadingH2, FontMedium } from '../styles'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: ${(props) => props.theme.color.greyscale500};
`

const StyledForm = styled.form`
  margin-top: 24px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyledFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const SubmitButton = styled.button`
  padding: 12px 16px;
  background-color: #272835;
  border: none;
  border-radius: 100px;
`
const StyledInputWrapper = styled.div`
  display: flex;
  gap: 12px;
`

export const RegistrationForm = () => {
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const { handleSubmit } = methods

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormContainer>
      <StyledFormHeader>
        <HeadingH2 color='greyscale900'>Create Account</HeadingH2>
        <FontMedium>Please input to your account</FontMedium>
      </StyledFormHeader>
      <FormProvider {...methods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInputWrapper>
            <Input
              name={'firstName'}
              placeholder='Input your first name'
              label='First Name'
              icon='user'
            />
            <Input
              name={'lastName'}
              placeholder='Input your last name'
              label='Last Name'
              icon='user'
            />
          </StyledInputWrapper>
          <Input
            name={'email'}
            type={'email'}
            placeholder='user@gmail.com'
            label='Email'
            icon='email'
          />
          <Input
            name={'password'}
            type={'password'}
            placeholder='your password'
            label='Password'
            icon='lock'
            rightIcon='eye'
          />
          <SubmitButton type='submit'>Continue</SubmitButton>
        </StyledForm>
      </FormProvider>
    </FormContainer>
  )
}
