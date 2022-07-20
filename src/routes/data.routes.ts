import { Home, Shop, Authentication, Checkout, Category } from 'pages'

import routesName from './enum.routes'

import { AccessTypeEnum, IRouterData } from './type.routes'

export const routesData: IRouterData[] = [
  {
    header: true,
    name: 'Home',
    component: Home,
    key: routesName.HOME,
    path: routesName.HOME,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC, AccessTypeEnum.USER]
  },
  {
    header: true,
    name: 'Authentication',
    component: Authentication,
    key: routesName.AUTHENTICATION,
    path: routesName.AUTHENTICATION,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC]
  },
  {
    header: true,
    name: 'Shop',
    component: Shop,
    parameter: '/*',
    key: routesName.SHOP,
    path: routesName.SHOP,
    requirePermission: false,
    accessType: [AccessTypeEnum.PUBLIC, AccessTypeEnum.USER]
  },
  {
    header: true,
    name: 'Checkout',
    component: Checkout,
    key: routesName.CHECKOUT,
    path: routesName.CHECKOUT,
    requirePermission: true,
    accessType: [AccessTypeEnum.USER]
  },
  {
    header: true,
    name: 'Category',
    component: Category,
    parameter: ':category',
    key: routesName.CATEGORY,
    path: routesName.CATEGORY,
    requirePermission: true,
    accessType: [AccessTypeEnum.USER]
  }
]
