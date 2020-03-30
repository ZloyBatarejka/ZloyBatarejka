import React from 'react';

const LeagueChildren = ({ matches }) => {
    let star;
    const smth = matches.map(item => {
        const hours = ('0' + new Date(item.time).getHours()).slice(-2)
        const minutes = ('0' + new Date(item.time).getMinutes()).slice(-2)
        if (item.favorite) {
            star = require("../img/star.png");
        } else {
            star = require("../img/activeStar.png");
        }
        return (
            <div className="match" key={item.id}>
                <div className="match__time">{hours}:{minutes}</div>
                <div className="match__name">{item.name}</div>
                <div className="match__star"><img src={star} alt="star" /></div>
                <div className="match__status">{item.status}</div>
                <div className="match__more">Подробнее</div>
            </div>
        )
    })
    return (
        <div className="matches">
            {smth}
        </div>
    );
}

export default LeagueChildren;
