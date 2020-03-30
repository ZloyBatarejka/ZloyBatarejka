import React, { useState } from 'react';
import MyLeaguesChildren from "./myLeaguesChildren";
const MyLeagues = ({ leagues }) => {
    const [state, setState] = useState({ opened: false });
    const changeState = () => {
        setState({ opened: !state.opened })
    }

    const myLeagues = leagues.map(league => {
        return (<div className="myLeagues__league" key={league.id}>
            {league.league} <button className="myLeagues__controller" onClick={() => { league.opened = !league.opened; setState({ opened: state.opened }) }}>&#8226;</button>
            <MyLeaguesChildren children={league.items} opened={league.opened} />
        </div>)
    })
    return (
        <div className="myLeagues">
            <p className="myLeagues__header">Мои лиги</p>
            {myLeagues}
        </div>
    );
}

export default MyLeagues;
