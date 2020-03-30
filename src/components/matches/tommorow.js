import React, { useContext } from 'react';
import LeagueComponent from "../leagueComponent";
import { Context } from "../../context";

const Tommorow = () => {
    const state = useContext(Context);
    state.forEach(item => {
        item.childToRender = [];
    })
    const leagues = new Set();
    state.forEach(league => {
        const t = new Date();
        t.setDate(t.getDate() + 1)
        const today = ('0' + t.getDate()).slice(-2);
        if (league.child.length) {
            league.child.forEach((match) => {
                const day = (match.time).slice(8, 10);
                if (day === today) {
                    league.childToRender.push(match);
                    leagues.add(league)
                }
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

export default Tommorow;







