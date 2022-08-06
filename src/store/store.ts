import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { rootReducer } from './root.reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [logger]

const composeEnhancer =
  (process.env.NODE_ENV === 'production' &&
    window &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
