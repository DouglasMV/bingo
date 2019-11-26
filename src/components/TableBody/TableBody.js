import React from 'react'
import Cell from '../Cell/Cell'
import StyledTableBody from '../TableBody/TableBody.css'

const nums = Array.from(Array(75), (e, i) => i)

export default function TableBody(props) {
  return (
    <StyledTableBody>
      {nums.map((value, index) => {
        return <Cell key={index+1} text={index+1} checked={props.numbersChecked[index]} />
      })}
    </StyledTableBody>
  )
}