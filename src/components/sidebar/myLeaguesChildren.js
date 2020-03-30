import React from 'react';

const MyLeaguesChildren = ({ children, opened }) => {
    const classes = ["myLeagues__children", opened ? null : "hide"]
    const content = children.map(item => {
        return (<p key={item.id}>{item.item}</p>)
    })
    return (
        <div className={classes.join(" ")}>
            {content}
        </div>
    );
}

export default MyLeaguesChildren;
