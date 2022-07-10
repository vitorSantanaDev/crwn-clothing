import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CrwnLogo } from 'components/atoms'

import routesName from 'routes/enum.routes'

import { UserContext } from 'contexts'
import { signOutUser } from 'services/firebase'

import * as S from './styles'

export default function Header() {
  const { user } = useContext(UserContext)

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
      </S.NavigationWrapper>
    </S.HeaderWrapper>
  )
}
