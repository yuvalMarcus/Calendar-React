import React, { useReducer } from 'react';

export const CalendarContext = React.createContext({
    calendar: {},
    reducerCalendar: null,
    getTasksByID: () => {},
    getTasksByDate: () => {}
});

const calendarReducer = (currentState, action) => {

    switch (action.type) {
        case 'SET_MONTH':

            return {
                ...currentState,
                month: action.month
            }
        case 'SET_YEAR':

            return {
                ...currentState,
                year: action.year
            }
        case 'SET_DISPLAY_TYPE':

            return {
                ...currentState,
                displayType: action.displayType
            }
        case 'ADD_TASK':

            action.task.ID = currentState.lastTaskID + 1;

            return {
                ...currentState,
                tasks: currentState.tasks.concat(action.task),
                lastTaskID: action.task.ID
            };
        case 'EDIT_TASK':

            const newTasks = [...currentState.tasks];

            const index = newTasks.findIndex(task => {
                return task.ID = action.task.ID;
            });

            newTasks[index] = action.task;

            return {
                ...currentState,
                tasks: newTasks
            };
        case 'REMOVE_TASK':
            return {
                ...currentState,
                tasks: currentState.tasks.filter(task => task.ID !== action.ID)
            };
        default:
            throw new Error('Error');
    }
};

const CalendarContextProvider = props => {

    const [calendar, reducerCalendar] = useReducer(calendarReducer, {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        displayType: 'grid',
        tasks : [
            {ID: 1, name: 'Design Sprint', description: 'description description', color: 'yellow', day: 5, month: 8, year: 2020, time: 3},
            {ID: 2, name: 'Projects', description: 'description description description description', color: 'red', day: 14, month: 8, year: 2020, time: 2},
            {ID: 3, name: 'Projects Projects', description: 'description description', color: 'red', day: 6, month: 8, year: 2020, time: 2}
        ],
        lastTaskID: 3
    });

    const onGetTasksByID = (ID) => {

        const task = calendar.tasks.filter(task => {
            return task.ID == ID;
        });

        if(task.length > 0) {

            return task[0];
        }

        return null;
    }

    const onGetTasksByDate = (year, month, day) => {

        if(day) {

            return calendar.tasks.filter(task => {

                const t = task.day + task.time;

                return task.year == year && task.month == month && task.day <= day && t >= day;
            })
        }

        return calendar.tasks.filter(task => {
            return task.year == year && task.month == month;
        })
    }

    return (
        <CalendarContext.Provider value={{
            calendar: calendar,
            reducerCalendar: reducerCalendar,
            getTasksByID: onGetTasksByID,
            getTasksByDate: onGetTasksByDate
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}

export default CalendarContextProvider;