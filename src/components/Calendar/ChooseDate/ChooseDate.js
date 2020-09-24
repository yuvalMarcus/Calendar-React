import React, {useContext} from 'react';

import { CalendarContext } from '../../../context/calendar-context';

import { months } from '../../../handlers/utility';

import './ChooseDate.css';

const ChooseDate = props => {

    const { calendar, reducerCalendar } = useContext(CalendarContext);

    let className = null;

    const yearElm = [calendar.year - 1, calendar.year, calendar.year + 1].map(year => {

        if(year === calendar.year)
            className = 'Select';
        else
            className = null;

        return (
            <div key={year} className={className}>
                <span onClick={() => reducerCalendar({type: 'SET_YEAR', year: year})}>{year}</span>
            </div>
        )
    });

    const monthElm = months.map(month => {

        if(month.id === calendar.month)
            className = 'Select';
        else
            className = null;

        return (
            <div key={month.sortName} className={className}>
                <span onClick={() => reducerCalendar({type: 'SET_MONTH', month: month.id})}>{month.sortName}</span>
            </div>
        )
    });

    return (
        <div className={'ChoosingDate'}>
            <h3>
                Choosing Year
            </h3>
            <div className={'Years'}>
                <div>
                    <button onClick={() => reducerCalendar({type: 'SET_YEAR', year: calendar.year -1})}>Prev</button>
                </div>
                {yearElm}
                <div>
                    <button onClick={() => reducerCalendar({type: 'SET_YEAR', year: calendar.year +1})}>Next</button>
                </div>
            </div>
            <h3>
                Choosing Month
            </h3>
            <div className={'Months'}>
                {monthElm}
            </div>
        </div>
    )
};

export default ChooseDate;