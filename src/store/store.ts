import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { rootSaga } from './root.saga'
import { rootReducer } from './root.reducer'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
