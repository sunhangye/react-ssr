import React from 'react'
import ReactDom from 'react-dom'
import Home from '../container/Home'
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/index';

const App = () => (
    <BrowserRouter>
        {Routes}
    </BrowserRouter>
)

ReactDom.hydrate(<App />, document.getElementById('root'))