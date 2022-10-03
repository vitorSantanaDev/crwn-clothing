export enum CategoryTypenum {
  HATS = 'hats',
  JACKETS = 'jackets',
  MENS = 'mens',
  SNEAKERS = 'sneakers',
  WOMENS = 'womens'
}

export interface ICategoryItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface ICategory {
  title: CategoryTypenum
  items: ICategoryItem[]
}

export type CategoryMapType = {
  [key: string]: ICategoryItem[]
}
