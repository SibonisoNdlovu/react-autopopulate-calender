import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk"

import reducers from './reducers';
import App from './components/App';

//create the store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//referencing the index.html(root) in public folder
ReactDOM.render(
    <Provider store={store}> <App/></Provider>,
    document.getElementById('root')
);