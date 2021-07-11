function capitalize(string) {
  const firstLetterCapitalized = string.split('')[0].toUpperCase()
  const slicedString = string.slice(1)
  return firstLetterCapitalized.concat(slicedString)
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
  mul: (a, b) => a * b,
}

function caesarCipher(str, shift) {
  const code = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  const newStr = []
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase()
    if (code.hasOwnProperty(letter)) {
      const index = code[letter]
      let newIndex = index + shift
      if (newIndex > 26) newIndex %= 26
      let newLetter = Object.keys(code).find(key => code[key] === newIndex)
      if (str[i] == str[i].toUpperCase()) newLetter = newLetter.toUpperCase()
      newStr.push(newLetter)
    } else {
      newStr.push(str[i])
    }
  }
  return newStr.join('')
}

function analyzeArray(array) {
  if (!array.length) return null
  const sum = array.reduce((a, b) => a + b)
  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
