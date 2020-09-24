import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = props => {

    let nextType = null;

    switch (props.typeCalendar) {
        case 'grid':
            nextType = 'List';
            break;
        case 'list':
            nextType = 'Grid';
            break;
        default:
            nextType = null;
    }

    return (
        <header>
            <div className={'Logo'}>
                <Link to="/">
                    <i className="fa fa-calendar" aria-hidden="true" />&nbsp;&nbsp;Calendar
                </Link>
            </div>
            <nav>
                &nbsp;&nbsp;<Link to="/add-task" className={'BtnAddTask'}>Add Task</Link>
            </nav>
        </header>
    )
};

export default Header;