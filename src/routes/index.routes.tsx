import React, { createElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageComponent } from 'components'

import { routesData } from './data.routes'

import { AccessTypeEnum } from './type.routes'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {routesData.map(
          ({ component, key, path, requirePermission, header, accessType }) => {
            if (
              !requirePermission &&
              accessType.includes(AccessTypeEnum.PUBLIC)
            ) {
              return (
                <Route
                  key={key}
                  path={path}
                  element={
                    <PageComponent includesHeader={header}>
                      {createElement(component)}
                    </PageComponent>
                  }
                />
              )
            } else if (requirePermission) {
              return (
                <Route
                  key={key}
                  path={path}
                  element={
                    <PageComponent includesHeader={header}>
                      {createElement(component)}
                    </PageComponent>
                  }
                />
              )
            }
            return null
          }
        )}
      </Routes>
    </BrowserRouter>
  )
}
