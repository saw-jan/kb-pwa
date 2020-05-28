import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import MainApp from './MainApp';
import SingleSong from './SingleSong';

const AppContainer = () => {
    return(
        <Router>
            <Switch>
                {/* <Route path="/" component={SingleSong} /> */}
                <Route path="/" exact component={MainApp} />
                <Route path="/single/:category/:id" component={SingleSong} />
                <Route component={MainApp} />
            </Switch>
        </Router>
    )
}

export default AppContainer;