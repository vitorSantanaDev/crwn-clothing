import { Home, Shop, Authentication } from 'pages'

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
    name: 'Authentication',
    header: true,
    component: Authentication,
    key: routesName.AUTHENTICATION,
    path: routesName.AUTHENTICATION,
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
