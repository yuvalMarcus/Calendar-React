import React from 'react';

import './Header.css';

const Header = props => {

    return (
        <React.Fragment>
            <span className={'DayName'}>Mon</span>
            <span className={'DayName'}>Tue</span>
            <span className={'DayName'}>Wed</span>
            <span className={'DayName'}>Thu</span>
            <span className={'DayName'}>Fri</span>
            <span className={'DayName'}>Sat</span>
            <span className={'DayName'}>Sun</span>
        </React.Fragment>
    )
};

export default Header;