import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableBody from '../TableBody/TableBody'
import StyledTable from './Table.css'

export default function Table(props) {
  return (
    <StyledTable>
      <TableHeader />
      <TableBody numbersChecked={props.numbersChecked}/>
    </StyledTable>
  )
}
