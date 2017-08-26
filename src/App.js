import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";

import Layout from "./components/Layout";
import CreatBookingButton from "./components/CreatBookingButton";
import SelectSession from "./components/SelectSession";
import {sessionsReducer, selectSessionReducer} from './reducers';
import {logState} from './middleware';

const App = () => {
    const reducer = combineReducers({
        sessions: sessionsReducer,
        bookingSession: combineReducers({
            session: selectSessionReducer
        })
    });

    // apply middleware to get state for external component
    const store = createStore(reducer, {}, applyMiddleware(logState));

    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={CreatBookingButton}/>
                        <Route exact path="/select/session" component={SelectSession}/>
                    </Layout>
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
};

export default App;
