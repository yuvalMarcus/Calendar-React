import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import CalendarContextProvider from './context/calendar-context';

ReactDOM.render(
    <CalendarContextProvider>
        <App />
    </CalendarContextProvider>,
  document.getElementById('root')
);
