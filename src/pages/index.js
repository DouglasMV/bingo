import React, { useState } from "react"
import Table from '../components/Table/Table.js'
import GlobalStyle from "../GlobalStyle.js"
import Display from '../components/Display/Display.js'
import generateRandNumbers from '../utils/generateRandNumbers'
import Last from '../components/Last/Last'

export let randNumbers = generateRandNumbers()
let btnText = 'Próximo Número!'

export default () => {

  const [showResetOptions, setShowResetOptions] = useState(false)

  const [loading, setLoading] = useState(false)

  const [currentRandIndex, setCurrentRandIndex] = useState(0);

  const [lastNumber, setLastNumber] = useState("Bingo")

  const [numbersChecked, setNumbersChecked] = useState(Array.from(Array(75), (v, i) => false))

  function handleClick() {
    setLoading(true)

    setTimeout(() => {
      setCurrentRandIndex(currentRandIndex + 1)

      if (currentRandIndex === randNumbers.length - 1) {
        btnText = "Fim"
      }
      if (currentRandIndex >= randNumbers.length) {
        return
      }

      setLastNumber(randNumbers[currentRandIndex].index + 1)
      setNumbersChecked(numbersChecked.map((v, i) => i === randNumbers[currentRandIndex].index ? true : v))
      setLoading(false)
    }, 2070)

  }

  function handleReset() {
    setShowResetOptions(true)
    console.log(setShowResetOptions)
  }

  function handleConfirm() {
    randNumbers = generateRandNumbers()
    setCurrentRandIndex(0)
    setLastNumber("Bingo")
    setNumbersChecked(numbersChecked.map((v, i) => false))
    setShowResetOptions(false)
  }

  function handleCancel() {
    setShowResetOptions(false)
  }

  return (
    <div>
      <Display number={lastNumber} loading={loading} />
      <Last index={currentRandIndex} />
      <button className='btn' disabled={loading} onClick={handleClick}>{btnText}</button>
      <button className='btn' disabled={loading} onClick={handleReset}>Reiniciar</button>
      <div className='resetOptions' hidden={!showResetOptions}>
        <button className='confirm'  onClick={handleConfirm}>Confirmar</button>
        <button className='cancel' onClick={handleCancel}>Cancelar</button>
      </div>
      <Table numbersChecked={numbersChecked} />
      <GlobalStyle />
    </div>
  )
}
