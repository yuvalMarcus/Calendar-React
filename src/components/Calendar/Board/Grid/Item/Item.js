import React from 'react';
import { Link } from 'react-router-dom';

import './item.css';

const Item = props => {

    const className=["CalendarGridDay"];

    if(props.disabled) {

        className.push('CalendarGridDayDisabled');
    }

    let classNameTask = null;

    switch (props.task) {
        case ('start'):
            classNameTask = <div className="DayStartTask">Tasks</div>;
            break;
        case ('progress'):
            classNameTask = <div className="DayInTask"></div>;
            break;
        default:
            classNameTask = null;
    }

    return (
        <Link to={{
            pathname: '/date',
            search: '?year=' + props.year + '&month=' + props.month + '&day=' + props.day
        }} className={className.join(' ')}>
            <span>{props.day}</span>
            {classNameTask}
        </Link>
    )
};

export default Item;