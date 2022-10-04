import { ICategoryItem } from './category'

export type CartItem = ICategoryItem & {
  quantity: number
}
