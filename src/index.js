import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import thunk from "redux-thunk"
import rootReducer from "./ducks"

import PartLookup from "./views/partsLookup/partsLookup"
import PartResults from "./views/partsResults/partsResults"

import * as serviceWorker from "./serviceWorker"

import "bootstrap/dist/css/bootstrap.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <PartLookup />
        </Route>
        <Route path="/results">
          <PartResults />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
