import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import createStore from './createStore'
import persistedReducer from './persistReducers'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(persistedReducer(rootReducer), middleware)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }