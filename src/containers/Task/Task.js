import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CalendarContext } from '../../context/calendar-context';

import './Task.css';

const Task = props => {

    const { reducerCalendar, getTasksByID } = useContext(CalendarContext);

    const deleteTask = () => {

        reducerCalendar({
            type: 'REMOVE_TASK',
            ID: task.ID
        });

        props.history.push('/');
    }

    const ID = props.match.params.id;

    const task = getTasksByID(ID);

    return (
        <div className={'SelectTaskContainer'}>
            <h2>Task : {task.name}</h2>
            <div className={'Detail'}>
                <span className={'Bold'}>Date :</span> <span>{task.day}/{task.month}/{task.year}</span> - <span>{task.day + task.time}/{task.month}/{task.year}</span>
                &nbsp;&nbsp;<span className={'Bold'}>Color: </span> <span>{task.color}</span>
            </div>
            <div className={'Detail'}>
                <Link className={'Edit'} to={"/edit-task/" + task.ID}>Edit</Link>
                <button className={'Delete'} onClick={deleteTask}>Delete</button>
            </div>
            <p>{task.description}</p>
        </div>
    )
};

export default Task;