export default function generateRandNumbers() {
  const randNumbers = Array.from(Array(75), (value, index) => ({ index, rand: Math.random() }))

  randNumbers.sort((a, b) => {
    return a.rand - b.rand
  })

  return randNumbers
}