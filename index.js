import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reelmRunner from 'reelm'
import createLogger from 'redux-logger'
import { immutableStateTransformer as stateTransformer } from 'utils'

import './src/Styles/Application.less'

import FullStateContainer from './src/FullStateContainer/FullStateContainer.view'
import Application from './src/Application/Application.view'
import applicationReducer from './src/Application/Application.reducer'

var store = createStore(
    applicationReducer,
    compose(reelmRunner(), applyMiddleware(createLogger({stateTransformer, collapsed: true}))));

ReactDom.render(
    <Provider store={store}>
        <FullStateContainer>
            <Application />
        </FullStateContainer>
    </Provider>,
    document.getElementById('content'));