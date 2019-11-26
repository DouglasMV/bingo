import React from 'react'
import StyledCell from './Cell.css'

export default function Cell(props) {
  return (
    <StyledCell checked={props.checked}>
      {props.text}
    </StyledCell>
  )
}


