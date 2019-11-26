import React, { useState, useEffect } from "react"
import Table from '../components/Table/Table.js'
import GlobalStyle from "../GlobalStyle.js"
import Display from '../components/Display/Display.js'
import generateRandNumbers from '../utils/generateRandNumbers'
import Last from '../components/Last/Last'

let randNumbers;

if (JSON.parse(localStorage.getItem('numbersArray'))) {
  randNumbers = JSON.parse(localStorage.getItem('numbersArray'))
} else {
  randNumbers = generateRandNumbers()
  localStorage.setItem('numbersArray', JSON.stringify(randNumbers))
}

export default () => {

  const [showResetOptions, setShowResetOptions] = useState(false)

  const [loading, setLoading] = useState(false)

  const [lastNumber, setLastNumber] = useState("Bingo")

  const initialIndex = () => Number(localStorage.getItem('currentIndex') || 0)

  const [currentRandIndex, setCurrentRandIndex] = useState(initialIndex);

  const initialChecked = () => JSON.parse(localStorage.getItem('numbersChecked')) || Array.from(Array(75), (v, i) => false)

  const [numbersChecked, setNumbersChecked] = useState(initialChecked)

  useEffect(() => {
    console.log(currentRandIndex)
    localStorage.setItem('currentIndex', currentRandIndex)
  }, [currentRandIndex])

  useEffect(() => {
    console.log(numbersChecked)

    localStorage.setItem('numbersChecked', JSON.stringify(numbersChecked))
  }, [numbersChecked])

  function handleClick() {
    setLoading(true)

    setTimeout(() => {
      setCurrentRandIndex(currentRandIndex + 1)

      if (currentRandIndex >= randNumbers.length) {
        return
      }

      setLastNumber(randNumbers[currentRandIndex].index + 1)
      setNumbersChecked(numbersChecked.map((v, i) => i === randNumbers[currentRandIndex].index ? true : v))
      setLoading(false)


    }, 2000)
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
    localStorage.removeItem('currentIndex')
    localStorage.removeItem('numbersArray')
    localStorage.removeItem('numbersChecked')
  }

  function handleCancel() {
    setShowResetOptions(false)
  }

  return (
    <div>
      <Display number={lastNumber} loading={loading} />
      <Last index={currentRandIndex} />
      <button className='btn' disabled={loading} onClick={handleClick}>Próximo Número!</button>
      <button className='btn' disabled={loading} onClick={handleReset}>Reiniciar</button>
      <div className='resetOptions' hidden={!showResetOptions}>
        <button className='confirm' onClick={handleConfirm}>Confirmar</button>
        <button className='cancel' onClick={handleCancel}>Cancelar</button>
      </div>
      <Table numbersChecked={numbersChecked} />
      <GlobalStyle />
    </div>
  )
}

export {randNumbers}