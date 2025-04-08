import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import {
  RiHeartFill,
  RiUser3Line,
  RiMailLine,
  RiLockLine,
  RiEyeLine,
} from '@remixicon/react'
import { theme } from '../styles'

export const Input = ({
  name,
  label,
  placeholder,
  icon,
  rightIcon,
  type = 'text',
}) => {
  const { register } = useFormContext()

  const pickIcon = (icon) => {
    switch (icon) {
      case 'user':
        return <RiUser3Line size={24} color={theme.color.greyscale400} />
      case 'email':
        return <RiMailLine size={24} color={theme.color.greyscale400} />
      case 'lock':
        return <RiLockLine size={24} color={theme.color.greyscale400} />
      case 'eye':
        return <RiEyeLine size={24} color={theme.color.greyscale400} />
      default:
        return <RiHeartFill size={24} color={theme.color.greyscale400} />
    }
  }

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputWrapper>
        <div>
          {icon && pickIcon(icon)}
          <StyledInput
            {...register(name)}
            placeholder={placeholder}
            type={type}
          ></StyledInput>
        </div>
        {rightIcon && pickIcon(rightIcon)}
      </StyledInputWrapper>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
  width: 100%;
`

const StyledInput = styled.input`
  color: #c1c7d0;
  font-size: 16px;
  color: ${(props) => props.theme.color.greyscale900};
  background-color: ${(props) => props.theme.color.greyscale0};
  border: none;

  &:focus-visible {
    outline: none;
  }
`

const StyledLabel = styled.label``

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  height: 48px;
  border: 1px solid #36394a;
  border-radius: 100px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.greyscale0};

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }
`
