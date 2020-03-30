import React from 'react';
import { Route } from 'react-router-dom';
import Today from "./matches/today";
import Tomorrow from "./matches/tommorow.js";
import All from "./matches/allMatches";
const Table = () => {
    return (
        <div className="table">
            <Route path="/" exact component={Today} />
            <Route path="/all/today" exact component={Today} />
            <Route path="/all/tommorow" exact component={Tomorrow} />
            <Route path="/all/all" exact component={All} />
        </div>
    );
}

export default Table;
