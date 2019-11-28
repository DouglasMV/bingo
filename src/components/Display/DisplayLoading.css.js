import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    50% {
		  stroke-dashoffset: 269.7405090332031px;
    }
    50.01% {
      stroke-dashoffset: -269.7405090332031px;
    }
  `

const StyledDisplayLoading = styled.div`
  width: 175px;
  margin: 10px auto 0 auto;
  height: 175px;
  
  & svg {
    stroke-dasharray: 269.7405090332031px;
	  stroke-dashoffset: 0;
	  animation: ${animate} 2s linear reverse infinite;
	  transform: rotate(-90deg);
  }
`

export default StyledDisplayLoading