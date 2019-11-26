import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableBody from '../TableBody/TableBody'

export default function Table(props) {
  return (
    <div>
      <TableHeader />
      <TableBody numbersChecked={props.numbersChecked}/>
    </div>
  )
}
