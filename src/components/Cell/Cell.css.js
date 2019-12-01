import styled from 'styled-components'

const StyledCell = styled.div`
  color: ${props => props.checked ? "black" : "white"};
  background-color: ${props => props.checked ? "yellow" : "black"};
  height: 35px;
  width: 35px;
  text-align: center;
  font-size: 18px;
  line-height: 35px;
  font-family: monospace;
  transition: 1s;
  font-weight: bold;
`

export default StyledCell