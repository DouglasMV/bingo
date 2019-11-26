import React, { useState } from "react"
import Table from '../components/Table/Table.js'
import GlobalStyle from "../GlobalStyle.js"
import Display from '../components/Display/Display.js'
import generateRandNumbers from '../utils/generateRandNumbers'

const randNumbers = generateRandNumbers()
let btnText = 'Próximo Número!'

export default () => {

  const [currentRandIndex, setCurrentRandIndex] = useState(0);

  const [lastNumber, setLastNumber] = useState("Boa Sorte!")

  const [numbersChecked, setNumbersChecked] = useState(Array.from(Array(75), (v, i) => false))

  function handleClick() {
    setCurrentRandIndex(currentRandIndex + 1)

    if (currentRandIndex === randNumbers.length - 1) {
      btnText = "Fim"
    }
    if (currentRandIndex >= randNumbers.length) {
      return
    }

    setLastNumber(randNumbers[currentRandIndex].index + 1)
    setNumbersChecked(numbersChecked.map((v, i) => i === randNumbers[currentRandIndex].index ? true : v))
  }

  return (
    <div>
      <Display number={lastNumber} />
      <button onClick={handleClick}>{btnText}</button>
      <Table numbersChecked={numbersChecked} />
      <GlobalStyle />
    </div>
  )
}
