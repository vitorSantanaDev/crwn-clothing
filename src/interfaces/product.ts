export interface IProduct {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface IProductCartItem extends IProduct {
  quantity: number
}
