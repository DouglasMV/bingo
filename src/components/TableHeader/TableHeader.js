import React from 'react'
import Cell from '../Cell/Cell'
import StyledTableHeader from './TableHeader.css'

export default function TableHeader() {
  return (
    <StyledTableHeader>
      <Cell text="B" checked={true} />
      <Cell text="I" checked={true} />
      <Cell text="N" checked={true} />
      <Cell text="G" checked={true} />
      <Cell text="O" checked={true} />
    </StyledTableHeader>
  )
}

