import React from 'react';
import LeagueChildren from "./leagueChildren";
const LeagueComponent = ({ props }) => {
    const flag = require("../img/flag.jpg");

    return (
        <div className="league">
            <div className="league__name"><img src={flag} alt="flag" className="league__img" />{props.item}</div>
            <LeagueChildren matches={props.childToRender} />
        </div>
    );
}

export default LeagueComponent;
