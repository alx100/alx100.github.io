import React from 'react';
import ReactDOM from 'react-dom';
import {Router}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import createSagaMid from 'redux-saga'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from'redux-thunk'
import './index.css';
import {App} from './App';
import reducer from'./redux/reducer'

import {watchFetchFilms,rootSaga} from './redux/sagas.js'
const logger = createLogger();
const saga  = createSagaMid();
const history=createBrowserHistory();
const store = createStore(
    reducer,applyMiddleware(thunk,logger,saga)
)
saga.run(rootSaga)


ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
