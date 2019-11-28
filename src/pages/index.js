import React, { useState, useEffect } from "react"
import Table from '../components/Table/Table.js'
import GlobalStyle from "../GlobalStyle.js"
import Display from '../components/Display/Display.js'
import generateRandNumbers from '../utils/generateRandNumbers'
import Last from '../components/Last/Last'
import SEO from '../components/SEO'

let randNumbers;

export default () => {
  if (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('numbersArray'))) {
    randNumbers = JSON.parse(localStorage.getItem('numbersArray'))
  } else {
    randNumbers = generateRandNumbers()
    if (typeof window !== 'undefined') {
      localStorage.setItem('numbersArray', JSON.stringify(randNumbers))
    }
  }

  const [showResetOptions, setShowResetOptions] = useState(false)

  const [loading, setLoading] = useState(false)

  let initialIndex = 0;
  if (typeof window !== 'undefined' && localStorage.getItem('currentIndex')) {
    initialIndex = () => Number(localStorage.getItem('currentIndex'))
  }
  const [currentRandIndex, setCurrentRandIndex] = useState(initialIndex);

  const initialLastNumber = currentRandIndex > 0 ? randNumbers[currentRandIndex - 1].index + 1 : "Bingo!"

  const [lastNumber, setLastNumber] = useState(initialLastNumber)

  let initialChecked = Array.from(Array(75), (v, i) => false)
  if (typeof window !== 'undefined' && localStorage.getItem('numbersChecked')) {
    initialChecked = () => JSON.parse(localStorage.getItem('numbersChecked'))
  }

  const [numbersChecked, setNumbersChecked] = useState(initialChecked)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentIndex', currentRandIndex)
    }
  }, [currentRandIndex])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('numbersChecked', JSON.stringify(numbersChecked))
    }
  }, [numbersChecked])

  function handleClick() {
    setLoading(true)
    setCurrentRandIndex(currentRandIndex + 1)
    setLastNumber(randNumbers[currentRandIndex].index + 1)

    setTimeout(() => {
      if (currentRandIndex >= randNumbers.length) {
        return
      }
      setNumbersChecked(numbersChecked.map((v, i) => i === randNumbers[currentRandIndex].index ? true : v))
      setLoading(false)
    }, 1000)
  }

  function handleReset() {
    setShowResetOptions(true)
  }

  function handleConfirm() {
    randNumbers = generateRandNumbers()
    setCurrentRandIndex(0)
    setLastNumber("Bingo")
    setNumbersChecked(numbersChecked.map((v, i) => false))
    setShowResetOptions(false)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentIndex')
      localStorage.removeItem('numbersArray')
      localStorage.removeItem('numbersChecked')
    }
  }

  function handleCancel() {
    setShowResetOptions(false)
  }

  return (
    <div>
      <SEO />
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

export { randNumbers }