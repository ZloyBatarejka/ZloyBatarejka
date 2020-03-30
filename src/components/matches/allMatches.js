import React, { useContext } from 'react';
import LeagueComponent from "../leagueComponent";
import { Context } from "../../context";
const All = () => {
    const state = useContext(Context);
    state.forEach(item => {
        item.childToRender = [];
    })
    const leagues = new Set();
    state.forEach(league => {
        if (league.child.length) {
            league.child.forEach((match) => {
                league.childToRender.push(match);
                leagues.add(league)
            })
        }
    })
    const b = Array.from(leagues).map(item => {
        return (<LeagueComponent key={item.id} props={item} />)
    })
    return (
        <div>
            {b}
        </div>
    );
}

export default All;







