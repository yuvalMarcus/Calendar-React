import React, {useCallback, useContext} from 'react';
import HeaderCalendar from './Header/Header';
import Item from "./Item/Item";

import {CalendarContext} from "../../../../context/calendar-context";

import {dayFirstInMonth, numberDaysInMonth, orderTaskInDays} from '../../../../handlers/utility';

const Grid = props => {

    const { calendar, getTasksByDate } = useContext(CalendarContext);

    const tasks = orderTaskInDays(getTasksByDate(calendar.year, calendar.month));
    const daysNow = numberDaysInMonth(calendar.year, calendar.month);
    const daysBefore = numberDaysInMonth(calendar.year, calendar.month-1);
    const dayFirst = dayFirstInMonth(calendar.year, calendar.month);

    const items = [];

    for (let i = daysBefore - dayFirst; i <= daysBefore; i++) {

        items.push(
            <Item key={'disabled-true---' + i} day={i} task={''} disabled={true} />
        );
    }

    let type = '';

    for(let i = 1; i <= daysNow; i++) {

        if(tasks[i] !== undefined) {
            type = tasks[i].type;
        } else {
            type = '';
        }

        items.push(
            <Item key={'disabled-false---' + i} year={calendar.year} month={calendar.month} day={i} task={type} disabled={false} />
        );
    }

    for (let i = 1; (dayFirst + daysNow + i) % 7 !== 0; i++) {

        items.push(
            <Item key={'disabled-true---' + i} day={i} task={''} disabled={true} />
        );
    }

    return (
        <React.Fragment>
            <HeaderCalendar />
            {items}
        </React.Fragment>
    )
}

export default Grid;