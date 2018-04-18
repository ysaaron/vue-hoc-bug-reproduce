import { createHOCc } from '../vue-hoc/packages/vue-hoc/src'

export function withStyle(style) {
  return createHOCc(null, {style})
}