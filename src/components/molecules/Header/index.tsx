import { CrwnLogo } from 'components/atoms'
import { Link } from 'react-router-dom'

import routesName from 'routes/enum.routes'

import * as S from './styles'

export default function Header() {
  return (
    <S.HeaderWrapper>
      <Link to={routesName.HOME} className="logoContainer">
        <CrwnLogo className="logo" />
      </Link>
      <S.NavigationWrapper>
        <Link to={routesName.SHOP} className="navLink">
          Shop
        </Link>
        <Link to={routesName.AUTHENTICATION} className="navLink">
          Sign In
        </Link>
      </S.NavigationWrapper>
    </S.HeaderWrapper>
  )
}
