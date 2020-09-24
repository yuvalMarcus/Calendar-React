import React, {useContext, useState} from 'react';
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Input from "../../UI/Input/Input";

import { CalendarContext } from '../../context/calendar-context';
import TaskContextProvider from '../../context/calendar-context';

import { elements, handleValidation } from '../../handlers/utility';

import './AddTask.css';

const AddTask = props => {

    const { reducerCalendar } = useContext(CalendarContext);

    const [form, setForm] = useState({
        elements: {
            name: {
                value: '',
                valid: false,
                clicked: false
            },
            color: {
                value: 'red',
                valid: true,
                clicked: false
            },
            date: {
                value: new Date(),
                valid: true,
                clicked: false
            },
            time: {
                value: '1',
                valid: true,
                clicked: false
            },
            description: {
                value: '',
                valid: true,
                clicked: false
            }
        },
        error: false
    });

    const handleSubmit = (event) => {

        event.preventDefault();

        let isValid = true;

        const elements = form.elements;

        Object.keys(elements).forEach(key => {

            isValid = isValid && elements[key].valid;
        });

        if(isValid) {

            const date = form.elements.date.value;

            const item = {
                name: form.elements.name.value,
                color: form.elements.color.value,
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
                time: parseInt(form.elements.time.value),
                description: form.elements.description.value
            };

            reducerCalendar({ type: 'ADD_TASK', task: item });

            props.history.push('/');

        } else {

            const elements = {
                ...form.elements,
                name: {
                    ...form.elements.name,
                    clicked: true
                },
                color: {
                    ...form.elements.color,
                    clicked: true
                },
                date: {
                    ...form.elements.date,
                    clicked: true
                },
                time: {
                    ...form.elements.time,
                    clicked: true
                },
                description: {
                    ...form.elements.description,
                    clicked: true
                }
            };

            setForm({elements:elements, error: true});
        }
    }

    const handleChange = (event, validation, keyIdentifier) => {

        const name = keyIdentifier;
        let value = null;

        if(keyIdentifier === 'date') {

            value = new Date(event);

        } else {

            value = event.target.value;
        }

        const isValid = handleValidation(validation, value);

        const elements = { ...form.elements};
        elements[name] = {
            ...form.elements[name],
            value: value,
            valid: isValid,
            clicked: true
        };

        setForm({elements: elements, error: false});
    }

    let error = false;

    let formElements = elements.map(element => {

        error = error ||
            (form.elements[element.elementConfig.name].clicked && !form.elements[element.elementConfig.name].valid);

        return (
            <Input
                key={element.elementConfig.name}
                elementType={element.elementType}
                label={element.elementLabel}
                value={form.elements[element.elementConfig.name].value}
                valid={form.elements[element.elementConfig.name].valid}
                clicked={form.elements[element.elementConfig.name].clicked}
                change={event => handleChange(event, element.validation, element.elementConfig.name)}
                elementConfig={element.elementConfig}
            />
        )
    });

    let errorMessage = null;

    if(form.error || error) {

        errorMessage = <ErrorMessage>Form Not Valid</ErrorMessage>;
    }

    return (
        <React.Fragment>
            <TaskContextProvider>
                <div className={'AddTaskContainer'}>
                    <h2>Add Task</h2>
                    <form className={'Form'} onSubmit={handleSubmit}>
                        {formElements}
                        <button className={'AddTaskSubmit'}>Add Task</button>
                        {errorMessage}
                    </form>
                </div>
            </TaskContextProvider>
        </React.Fragment>
    )
};

export default AddTask;