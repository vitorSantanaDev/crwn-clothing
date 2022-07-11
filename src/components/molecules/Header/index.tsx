import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CrwnLogo, CartIcon } from 'components/atoms'
import CartDropDown from '../CartDropDown'

import routesName from 'routes/enum.routes'

import { UserContext, CartContext } from 'contexts'
import { signOutUser } from 'services/firebase'

import * as S from './styles'

export default function Header() {
  const { user } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  async function signOutHandler() {
    await signOutUser()
  }

  return (
    <S.HeaderWrapper>
      <Link to={routesName.HOME} className="logoContainer">
        <CrwnLogo className="logo" />
      </Link>
      <S.NavigationWrapper>
        <Link to={routesName.SHOP} className="navLink">
          SHOP
        </Link>
        {user ? (
          <Link
            className="navLink"
            onClick={signOutHandler}
            to={routesName.AUTHENTICATION}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link to={routesName.AUTHENTICATION} className="navLink">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </S.NavigationWrapper>
      {isCartOpen && <CartDropDown />}
    </S.HeaderWrapper>
  )
}
