import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  `

const StyledDisplayLoading = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: yellow;
  animation: ${animate} 2s linear infinite;
`

export default StyledDisplayLoading