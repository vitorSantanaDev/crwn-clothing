import { ComponentClass, FunctionComponent } from 'react'

export enum AccessTypeEnum {
  USER = 'USER',
  PUBLIC = 'PUBLIC'
}

export interface IRouterData {
  key: string
  name: string
  path: string
  header?: boolean
  parameter?: string
  accessType: AccessTypeEnum[]
  requirePermission: boolean
  component: string | FunctionComponent<{}> | ComponentClass<{}>
}
