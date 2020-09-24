import React, {useContext} from 'react';
import Grid from './Grid/Grid';
import List from "./List/List";

import { CalendarContext } from '../../../context/calendar-context';

import './Board.css';

const Board = props => {

    const { calendar } = useContext(CalendarContext);

    const ucfirst = str => str.charAt(0).toUpperCase() + str.slice(1);

    const classNameCalendar = ['Calendar', ucfirst(calendar.displayType)].join(' ');

    return (
        <React.Fragment>
            <div className={classNameCalendar}>
                { calendar.displayType === 'grid' && <Grid/> }
                { calendar.displayType === 'list' && <List/> }
            </div>
        </React.Fragment>
    )
};

export default Board;