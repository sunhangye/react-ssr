import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';

export default (
    <Fragment>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
    </Fragment>
)