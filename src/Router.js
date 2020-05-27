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
                <Route path="/single/:category/:id" exact component={SingleSong} />
                <Route component={SingleSong} />
            </Switch>
        </Router>
    )
}

export default AppContainer;