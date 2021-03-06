import React, { useContext } from 'react';
import LeagueComponent from "../leagueComponent";
import { Context } from "../../context";

const Today = () => {
    const state = useContext(Context);
    state.forEach(item => {
        item.childToRender = [];
    })
    const leagues = new Set();
    state.forEach(league => {
        const t = (new Date()).getDate();
        const today = ('0' + t).slice(-2);
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

export default Today;








// import React, { Component, useContext } from 'react';
// import LeagueComponent from "../leagueComponent";
// import { Context } from "../../context";

// const Today = () => {
//     const state = useContext(Context);
//     const b = state.map(item => {
//         if (item.child.length) {
//             return (<LeagueComponent key={item.id} props={item} />)
//         }
//     })
//     return (
//         <div>
//             {b}
//         </div>
//     );
// }

// export default Today;
