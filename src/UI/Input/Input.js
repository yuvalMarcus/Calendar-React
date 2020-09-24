import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = (props) => {

    let element = null;

    switch(props.elementType) {
        case ('input'):
            element = <input value={props.value} onChange={props.change} {...props.elementConfig} />;
            break;
        case ('textarea'):
            element = <textarea value={props.value} onChange={props.change} {...props.elementConfig} />;
            break;
        case ('select'):
            element = (
                <select
                    value={props.value}
                    onChange={props.change} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        case ('checkbox'):
            element = props.elementConfig.boxes.map(checkbox => (
                <React.Fragment key={checkbox.id}>
                    <input type="checkbox" id={checkbox.id} onChange={checkbox.onChange} checked={checkbox.value} />
                    <label htmlFor={checkbox.id}>{checkbox.label}</label>
                </React.Fragment>
            ))
            break;
        case ('date'):
            element = <DatePicker selected={props.value} onChange={date => props.change(date)} />
            break;
        default:
            element = <input value={props.value} onChange={props.change} {...props.elementConfig} />;
            break;
    }

    return (
        <div className={'Field'}>
            <label>{props.label}</label>
            {element}
        </div>
    )
}

export default Input;