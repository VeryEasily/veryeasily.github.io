import { random } from 'lodash'
import { TITLE } from './constants'

const UNICODE_START_POINT = 128512

export const swapLetter = (str) => {
  // We have to be careful about unicode
  const uArr       = Array.from(str)
  const randLetter = String.fromCodePoint(UNICODE_START_POINT + random(99))
  const idx = random(uArr.length - 1)

  uArr[idx] = random(5) !== 0 ?
    Array.from(TITLE)[idx] :
    randLetter

  return uArr.join('')
}
