import { expect, test } from '@jest/globals'
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './functions'

test('capitalize', () => {
  expect(capitalize('abcde')).toBe('Abcde')
  expect(capitalize('.abcd')).toBe('.abcd')
  expect(capitalize('abCde')).toBe('AbCde')
  expect(capitalize('Abcde')).toBe('Abcde')
})

test('reverseString', () => {
  expect(reverseString('idk')).toBe('kdi')
  expect(reverseString('Hi There')).toBe('erehT iH')
  expect(reverseString('Welcome to the future')).toBe('erutuf eht ot emocleW')
  expect(reverseString("Today I'm going to be productive :)")).toBe(
    "): evitcudorp eb ot gniog m'I yadoT"
  )
})

test('calculator', () => {
  expect(calculator.add(12, 4)).toBe(16)
  expect(calculator.sub(15, 41)).toBe(-26)
  expect(calculator.div(2, 4)).toBe(0.5)
  expect(calculator.mul(11, 11)).toBe(121)
})

test('caesarCipher', () => {
  expect(caesarCipher('greetings good sir!', 0)).toBe('greetings good sir!')
  expect(caesarCipher('what a wonderful day', 3)).toBe('zkdw d zrqghuixo gdb')
  expect(caesarCipher('I Really Need To Sleep Early Tonight!', 6)).toBe(
    'O Xkgrre Tkkj Zu Yrkkv Kgxre Zutomnz!'
  )
  expect(caesarCipher('going@ to@ work', 11)).toBe('rztyr@ ez@ hzcv')
})

test('analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
  expect(analyzeArray([0, 1, 2, 3, 4])).toEqual({
    average: 2,
    min: 0,
    max: 4,
    length: 5,
  })
  expect(analyzeArray([])).toBeNull()
  expect(analyzeArray([1, 100, 1000, 10000])).toEqual({
    average: 2775.25,
    min: 1,
    max: 10000,
    length: 4,
  })
})
