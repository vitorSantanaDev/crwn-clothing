import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CrwnLogo, CartIcon } from 'components/atoms'
import CartDropDown from '../CartDropDown'

import routesName from 'routes/enum.routes'

import { CartContext } from 'contexts'
import { signOutUser } from 'services/firebase'

import * as S from './styles'
import { userActions } from 'store'

export default function Header() {
  const { user } = useSelector((state: any) => state.user)
  const { isCartOpen } = useContext(CartContext)

  const dispatch = useDispatch()

  async function signOutHandler() {
    await signOutUser()
    dispatch(userActions.resetUser())
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
