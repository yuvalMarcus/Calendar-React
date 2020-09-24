import React, {useReducer, useState, useMemo, useCallback, useContext} from 'react';
import Board from '../../components/Calendar/Board/Board';
import Modal from "../../UI/Modal/Modal";
import ChooseDate from "../../components/Calendar/ChooseDate/ChooseDate";

import { CalendarContext } from '../../context/calendar-context';

import { nextMonthAndYear, prevMonthAndYear, months } from "../../handlers/utility";

import './Calendar.css';

const Calendar = props => {

    const { calendar, reducerCalendar } = useContext(CalendarContext);

    const [modal, setModal] = useState(false);

    const setMonth = type => {

        let newMonth = null;
        let newYear = null;

        switch (type) {
            case 'next':
                [newMonth, newYear] = nextMonthAndYear(calendar.month, calendar.year);
                break;
            case 'prev':
                [newMonth, newYear] = prevMonthAndYear(calendar.month, calendar.year);
                break;
            default:
                break;
        }

        reducerCalendar({type: 'SET_MONTH', month: newMonth});
        reducerCalendar({type: 'SET_YEAR', year: newYear});
    };

    const changeDisplayType = () => {

        switch (calendar.displayType) {
            case 'grid': reducerCalendar({type: 'SET_DISPLAY_TYPE', displayType: 'list'});
                break;
            case 'list': reducerCalendar({type: 'SET_DISPLAY_TYPE', displayType: 'grid'});
                break;
            default:
                return;
        }
    };

    let modalContent = null;

    if(modal) {

        modalContent = (
            <Modal title="Select Date" onClose={() => setModal(false)} >
                <ChooseDate />
            </Modal>
        );
    }

    const displayType = calendar.displayType === 'grid' ? 'List' : 'Grid' ;

    return (
        <React.Fragment>
                {modalContent}

                <div className="Management">
                    Display Type : <button onClick={changeDisplayType}>{displayType}</button>
                </div>

                <div className="CalendarContainer">
                    <div className="CalendarHeader">
                        <div>
                            <button className="Nav" onClick={() => setMonth('prev')}>Prev</button>
                        </div>
                        <div>
                            <h1>
                                {months[calendar.month].fullName}
                                <button onClick={() => setModal(true)}>▾</button>
                            </h1>
                            <p>{calendar.year}</p>
                        </div>
                        <div>
                            <button className="Nav" onClick={() => setMonth('next')}>Next</button>
                        </div>
                    </div>
                    <Board year={calendar.year} month={calendar.month} displayType={calendar.displayType} />
                </div>
        </React.Fragment>
    )
};

export default Calendar;