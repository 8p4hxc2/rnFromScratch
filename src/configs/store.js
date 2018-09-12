import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMw = createSagaMiddleware();

// store creation
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMw)
);

// run saga
sagaMw.run(rootSaga);

export default store;