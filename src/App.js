import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";


import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const App = () => {

  const reducer = combineReducers({
    addresses: null
  });

  // apply middleware to get state for external component
  const store = createStore(reducer);

  return (
      <Provider store={store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <Layout>

            </Layout>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
  );
};

export default App;
