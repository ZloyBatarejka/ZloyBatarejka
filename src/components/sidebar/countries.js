import React from 'react';

const Countries = ({ countries }) => {
    console.log("hello", countries)
    const content = countries.map(item => {
        return (<p key={item.id} className="myLeagues__league">{item.country}</p>)
    })
    return (
        <div className="myLeagues">
            <p className="myLeagues__header">Страны</p>
            {content}
        </div>
    );
}

export default Countries;
