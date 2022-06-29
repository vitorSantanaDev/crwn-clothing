import { Home, Shop, SignIn } from 'pages'

import routesName from './enum.routes'

import { AccessTypeEnum, IRouterData } from './type.routes'

export const routesData: IRouterData[] = [
  {
    name: 'Home',
    header: true,
    component: Home,
    key: routesName.HOME,
    path: routesName.HOME,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC, AccessTypeEnum.USER]
  },
  {
    name: 'Login',
    header: false,
    component: SignIn,
    key: routesName.LOGIN,
    path: routesName.LOGIN,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC]
  },
  {
    name: 'Shop',
    header: true,
    component: Shop,
    key: routesName.SHOP,
    path: routesName.SHOP,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC, AccessTypeEnum.USER]
  }
]
