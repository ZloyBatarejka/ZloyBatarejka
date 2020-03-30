import React, { Component } from 'react';
import { Route } from "react-router-dom";
import All from "../pages/all";
import Live from "../pages/live";
import Schedule from "../pages/schedule";
import Forecast from "../pages/forecast";
import Results from "../pages/results";
class Main extends Component {
    render() {
        return (
            <main className="main">
                <Route path="/" exact component={All} />
                <Route path="/all" component={All} />
                <Route path="/live" exact component={Live} />
                <Route path="/schedule" exact component={Schedule} />
                <Route path="/forecast" exact component={Forecast} />
                <Route path="/results" exact component={Results} />
            </main>
        );
    }
}

export default Main;
