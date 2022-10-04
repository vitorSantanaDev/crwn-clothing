export interface IShopData {
  title: string
  items: {
    id: number
    name: string
    imageUrl: string
    price: number
  }[]
}
