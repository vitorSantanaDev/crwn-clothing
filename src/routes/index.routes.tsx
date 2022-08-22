import React, { createElement } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { PageComponent } from 'components'

import routesName from './enum.routes'
import { routesData } from './data.routes'

import { AccessTypeEnum } from './type.routes'

export default function RoutesApp() {
  const user = useSelector((state) => (state as { user: any }).user)

  return (
    <BrowserRouter>
      <Routes>
        {routesData.map(
          ({
            key,
            path,
            header,
            component,
            parameter,
            accessType,
            requirePermission
          }) => {
            const pathOfTheRoute = parameter?.length
              ? `${path}/${parameter}`
              : `${path}`

            if (
              !requirePermission &&
              accessType.includes(AccessTypeEnum.PUBLIC)
            ) {
              return (
                <Route
                  key={key}
                  path={pathOfTheRoute}
                  element={
                    <PageComponent includesHeader={header}>
                      {createElement(component)}
                    </PageComponent>
                  }
                />
              )
            } else if (
              user.user &&
              requirePermission &&
              !accessType.includes(AccessTypeEnum.PUBLIC)
            ) {
              console.log({ user, requirePermission, accessType })
              return (
                <Route
                  key={key}
                  path={pathOfTheRoute}
                  element={
                    <PageComponent includesHeader={header}>
                      {createElement(component)}
                    </PageComponent>
                  }
                />
              )
            }
            return (
              <Route
                path="*"
                key={routesName.AUTHENTICATION}
                element={<Navigate to={routesName.AUTHENTICATION} replace />}
              />
            )
          }
        )}
      </Routes>
    </BrowserRouter>
  )
}
