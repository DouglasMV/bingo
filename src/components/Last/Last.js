import React from 'react'
import { randNumbers } from '../../pages/index'
import StyledLast from './Last.css'

export default function LastFive(props) {
  if (props.index > 1) {
    return (
      <StyledLast>
        Anterior: {randNumbers[props.index - 2].index}
      </StyledLast>
    )
  }
  return (<StyledLast></StyledLast>)
}