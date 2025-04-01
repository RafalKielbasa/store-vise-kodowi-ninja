import React from 'react'
import { styled } from "styled-components"
import image from "../assets/image.png"
import RegistrationForm from './RegistrationForm'

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`
const Image = styled.img`
    height: 100%;
    width: 50%;
    background-size: contain;
`


const Register = () => {
    return (
        <RegisterContainer>
            <Image src={image} alt={"image"} />
            <RegistrationForm />
        </RegisterContainer>
    )
}

export default Register