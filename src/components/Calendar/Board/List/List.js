import React, {useContext, useEffect} from 'react';
import Item from "./Item/Item";

import {CalendarContext} from "../../../../context/calendar-context";

import { numberDaysInMonth, orderTaskInDays } from '../../../../handlers/utility';

const List = props => {

    const { calendar, getTasksByDate } = useContext(CalendarContext);

    const tasks = orderTaskInDays(getTasksByDate(calendar.year, calendar.month));

    const days = numberDaysInMonth(calendar.year, calendar.month);

    const items = [];

    let task = null;

    for(let i = 1; i <= days; i++) {

        if(tasks[i] !== undefined) {

            task = tasks[i].tasks;
        } else {
            task = null;
        }

        items.push(
            <Item key={i} day={i} tasks={task} />
        );
    }

    return items;

    /*
    return days.map(day => {

        return <Item key={day.disabled + '--' + day.number} day={day.number} tasks={tasks[day.number]} />;
    })
    */
}

export default List;