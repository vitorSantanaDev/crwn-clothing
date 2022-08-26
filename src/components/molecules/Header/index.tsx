import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userActions, userSelector, cartStoreSelectors } from 'store'

import { CrwnLogo, CartIcon } from 'components/atoms'
import CartDropDown from '../CartDropDown'

import routesName from 'routes/enum.routes'

import * as S from './styles'

export default function Header() {
  const user = useSelector(userSelector)
  const isCartOpen = useSelector(cartStoreSelectors.selectCartIsOpen)

  const dispatch = useDispatch()

  async function signOutHandler() {
    dispatch(userActions.signOutStart())
  }

  return (
    <S.HeaderWrapper>
      <Link to={routesName.HOME} className="logoContainer">
        <CrwnLogo className="logo" />
      </Link>
      <S.NavigationWrapper>
        <Link to={routesName.SHOP} className="navLink">
          Loja
        </Link>
        {user ? (
          <Link
            className="navLink"
            onClick={signOutHandler}
            to={routesName.AUTHENTICATION}
          >
            Sair
          </Link>
        ) : (
          <Link to={routesName.AUTHENTICATION} className="navLink">
            Entrar
          </Link>
        )}
        <CartIcon />
      </S.NavigationWrapper>
      {isCartOpen && <CartDropDown />}
    </S.HeaderWrapper>
  )
}
