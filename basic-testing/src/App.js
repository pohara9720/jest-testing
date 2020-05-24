import { add } from './add'

export const total = (subTotal, total) => `$${add(subTotal, total)}`