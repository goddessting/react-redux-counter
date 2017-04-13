require('../css/style.css');

import ReactDom from 'react-dom';
import React from 'react';
import Hello from './hello';

import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {browserHistory} from 'react-router';
import reducer from '../reducers/add';

const store = createStore(reducer);


ReactDom.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('content')
);