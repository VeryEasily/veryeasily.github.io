import { TOGGLE_ART_FOCUS } from '../helpers/constants'

export function focusArtwork(art) {
  return { type: TOGGLE_ART_FOCUS, art }
}
