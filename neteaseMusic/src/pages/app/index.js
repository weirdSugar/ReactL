import React from 'react'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import Home from '../home'
import Skin from '../skin'
import Error from '../error'
import Menu from '../../components/menu'
const App = props => {
    return (
        <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Skin" component={Skin}/>
                    <Route component={Error}/>
                </Switch>
        </Router>
    )
}
export default App