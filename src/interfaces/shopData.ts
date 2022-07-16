export interface IShopData {
  title: string
  items: {
    id: number
    name: string
    imageUrl: string
    price: number
  }[]
}

export enum CategoryTypenum {
  HATS = 'hats',
  JACKETS = 'jackets',
  MENS = 'mens',
  SNEAKERS = 'sneakers',
  WOMENS = 'womens'
}
