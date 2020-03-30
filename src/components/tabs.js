import React, { useContext } from 'react';
import { Context } from "../context";
import { NavLink } from 'react-router-dom';

const Tabs = () => {
    const date = new Date();
    const d = date.getDate();
    const today = ('0' + (date.getDate())).slice(-2);
    const tommorow = ('0' + new Date(date.setDate(date.getDate() + 1)).getDate()).slice(-2);
    const m = date.getMonth();
    const w = date.getDay();
    const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
    let todayMatches = 0;
    let tommorowMatches = 0;
    let allMatches = 0;
    let data = useContext(Context);
    data.forEach(league => {
        if (league.child.length) {
            league.child.forEach(match => {
                let matchDate = Number.parseInt((new Date(match.time).getDate()))
                if (+today === matchDate) {
                    todayMatches++
                } else if (+tommorow === matchDate) {
                    tommorowMatches++;
                }
                allMatches++;
            })
        }
    })
    return (
        <div className="tabs">
            <ul className="tabs__list">
                <li >
                    <NavLink
                        to="/all/today"
                        className="tabs__item"
                    >
                        Сегодня <span className="tabs__count">{todayMatches}</span>

                    </NavLink></li>
                <li >
                    <NavLink
                        to="/all/tommorow"
                        className="tabs__item"
                    >
                        Завтра <span className="tabs__count">{tommorowMatches}</span>
                    </NavLink></li>
                <li >
                    <NavLink
                        to="/all/all"
                        className="tabs__item"
                    >
                        Все матчи <span className="tabs__count">{allMatches}</span>
                    </NavLink></li>

            </ul>
            <div className="tabs__calendar">
                <i className="fas fa-table "></i>
            </div>
            <div className="tabs__date">
                {`${('0' + d).slice(-2)}.${('0' + (m + 1)).slice(-2)} ${week[w]}`}
            </div>
        </div>
    );
}

export default Tabs;
