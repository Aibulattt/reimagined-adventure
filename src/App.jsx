import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Cart } from './components/Cart/Cart'
import { Products } from './components/Products/Products'

import './main.scss'
import { rootReducer } from './store/reducer'

const store = createStore(rootReducer, composeWithDevTools())

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Products />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}