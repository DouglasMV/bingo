import React from 'react'
import StyledDisplay from './Display.css'
import StyledDisplayLoading from './DisplayLoading.css'

export default function Display(props) {

  if (props.loading) {
    return (
    <StyledDisplayLoading>
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <circle id="c" fill="none" strokeWidth="4" strokeLinecap="round" stroke="yellow" cx="45" cy="45" r="43" />
      </svg>
    </StyledDisplayLoading>
    )
  }

  let letter = ''

  if (props.number <= 15) {
    letter = 'B-'
  } else if (props.number <= 30) {
    letter = 'I-'
  } else if (props.number <= 45) {
    letter = 'N-'
  } else if (props.number <= 60) {
    letter = 'G-'
  } else if (props.number <= 75) {
    letter = 'O-'
  }

  return (
    <StyledDisplay>
      {letter + props.number}
    </StyledDisplay>
  )
}
