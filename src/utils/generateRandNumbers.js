export default function generateRandNumbers() {
  const randNumbers = Array.from(Array(75), (value, index) => ({ index: index + 1, rand: Math.random() }))

  randNumbers.sort((a, b) => {
    return a.rand - b.rand
  })

  randNumbers.push({ index: 'Bingo', rand: null })
console.log(randNumbers);

  return randNumbers
}