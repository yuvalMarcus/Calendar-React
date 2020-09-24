import React from 'react';
import Task from "../../../../Task/Task";

import './Item.css';

const Item = props => {

    let tasks = null;

    if(props.tasks !== null) {

        tasks = props.tasks.map(task => {
            return <Task
                key={task.ID}
                ID={task.ID}
                name={task.name}
                type={task.type}
                color={task.color} />;
        });
    }

    return (
        <div className="CalendarListDay">
            {props.day}
            {tasks}
        </div>
    )
};

export default Item;