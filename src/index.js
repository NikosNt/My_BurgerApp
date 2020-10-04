import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { createStore,applyMiddleware, compose ,combineReducers} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer'
import orderReducer from './store/reducers/orderReducer'

const rootReducer = combineReducers({
    burgerBuilderReducer: burgerBuilderReducer,
    orderReducer: orderReducer
});

// const logger =  store => {  //midleware
//     return next => {
//         return action => {
//             console.log('[Middleware] Dispatching', action);
//             const result = next(action);
//             console.log('[Middleware] next state', store.getState() );
//             return result;
//         }
//     }
// } 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(thunk)) );

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
