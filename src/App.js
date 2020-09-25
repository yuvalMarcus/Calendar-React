import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Layout from "./components/Layout/Layout";
import Calendar from './containers/Calendar/Calendar';
import Task from "./containers/Task/Task";
import DatePage from "./containers/DatePage/DatePage";
import AddTask from './containers/AddTask/AddTask';
import EditTask from './containers/EditTask/EditTask';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter basename="/react/calendar/" >
            <Layout>
                <Switch>
                    <Route path="/task/:id" component={Task} />
                    <Route path="/add-task" component={AddTask} />
                    <Route path="/edit-task/:id" component={EditTask} />
                    <Route path="/date" component={DatePage} />
                    <Route path="/" component={Calendar} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
