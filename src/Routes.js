import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Home from "./Home";
import history from './history';
import AddAcount from './addacount';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    
                    <Route path="/addacont" component={AddAcount} />
                </Switch>
            </Router>
        )
    }
}
