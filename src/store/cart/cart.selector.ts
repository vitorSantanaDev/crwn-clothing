import { createSelector } from 'reselect'

const selectCartReducer = (state: any) => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart: any) => cart.cartItems
)

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart: any) => cart.isCartOpen
)

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: any) =>
    cartItems.reduce((acc: any, cartItem: any) => acc + cartItem.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems: any) =>
    cartItems.reduce((acc: any, item: any) => {
      return (acc += item.price * item.quantity)
    }, 0)
)
