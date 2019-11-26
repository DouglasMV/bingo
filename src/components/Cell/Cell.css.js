import styled from 'styled-components'

const StyledCell = styled.div`
  color: ${props => props.checked ? "black" : "yellow"};
  background-color: ${props => props.checked ? "yellow" : "black"};
  height: 35px;
  width: 35px;
  border: 1px solid white;
  text-align: center;
  font-size: 18px;
  line-height: 35px;
  font-family: monospace;
  transition: 1s;
`

export default StyledCell