import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore,applyMiddleware, compose ,combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';
import authReducer from './store/reducers/authReducer';
import { watchAuth,watchburgerBuilder,watchOrder } from './store/sagas/indexSaga'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose ;

const rootReducer = combineReducers({
    burgerBuilderReducer: burgerBuilderReducer,
    orderReducer: orderReducer,
    authReducer: authReducer
});

const sagaMiddlewarre = createSagaMiddleware();

const store = createStore(rootReducer,composeEnhancers( 
    applyMiddleware(thunk, sagaMiddlewarre)
));

sagaMiddlewarre.run(watchAuth);
sagaMiddlewarre.run(watchburgerBuilder);
sagaMiddlewarre.run(watchOrder);

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
