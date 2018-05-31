import { FOCUS_ARTWORK } from '../helpers/constants'

export function focusArtwork(art) {
  return { type: FOCUS_ARTWORK, art }
}
