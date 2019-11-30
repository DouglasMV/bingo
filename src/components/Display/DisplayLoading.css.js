import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(0.8);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  `

const StyledDisplayLoading = styled.div`
  display: block;
  width: 175px;
  height: 175px;
  margin: 10px auto 0 auto;
  &:after {
    content: " ";
    display: block;
    width: 150px;
    height: 150px;
    margin: 10px auto;
    border-radius: 50%;
    border: 6px solid yellow;
    border-color: yellow transparent yellow transparent;
    animation: ${animate} 1s linear infinite;
  }
`

export default StyledDisplayLoading