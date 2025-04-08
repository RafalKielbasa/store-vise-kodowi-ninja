import React from 'react'
import { styled } from 'styled-components'
import image from '../assets/image.png'
import { RegistrationForm } from '../components'

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
`
const Image = styled.img`
  height: calc(100vh - 80px);
  width: 50%;
  background-size: contain;
`

export const RegisterPage = () => {
  return (
    <RegisterContainer>
      <Image src={image} alt={'image'} />
      <RegistrationForm />
    </RegisterContainer>
  )
}
