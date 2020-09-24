import React, { useContext } from 'react';
import Task from "../../components/Task/Task";

import { CalendarContext } from '../../context/calendar-context';

import './DatePage.css';

const DatePage = props => {

    const { calendar, getTasksByDate } = useContext(CalendarContext);

    const date = {};

    const query = new URLSearchParams(props.location.search);

    for (let param of query.entries()) {
        date[param[0]] = parseInt(param[1]);
    }

    let type = null;

    let tasks = getTasksByDate(date.year, date.month, date.day).map(task => {

        if(date.day === task.day) {
            type = 'start';
        } else {
            type = 'progress';
        }

        return <Task key={task.ID} type={type} ID={task.ID} name={task.name} color={task.color} />;
    });

    if(tasks.length === 0) {

        tasks = <p>Empty Tasks</p>;
    }

    return (
        <div className={'DatePageContainer'}>
            <h2>Tasks List</h2>
            <div className={'Detail'}>
                <span className={'Bold'}>Date :</span> <span>{date.day}/{date.month}/{date.year}</span>
            </div>
            {tasks}
        </div>
    )
};

export default DatePage;