import styled from 'styled-components'

export const HeadingH2 = styled.h2`
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -2%;
  font-weight: 500;
  margin: 0;
  color: ${(props) => {
    if (props.color) {
      return props.theme.color[props.color]
    }
  }};
`

export const FontMedium = styled.p`
  font-size: 16px;
  line-height: 160%;
  font-weight: 500;
  font-style: normal;
  margin: 0;
`
