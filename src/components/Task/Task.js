import React from 'react';
import { Link } from 'react-router-dom';

import { ucfirst } from '../../handlers/utility';

import './Task.css';

const MiniTask = props => {

    let className=["Task", "Task" + ucfirst(props.color), ucfirst(props.type)];

    className = className.join(' ');

    return (
        <Link to={"/task/" + props.ID} className={className}>
            <span>{props.name}</span>
        </Link>
    )
};

export default MiniTask;