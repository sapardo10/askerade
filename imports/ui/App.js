import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.js';

class App extends Component { 

  constructor(props) {

    super(props); 

    this.state = {
      hideCompleted: false,
    };

  }

  toggleHideCompleted() {

    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });

  }

  renderTasks() {
    return this.props.tasks.map((task) => (

      <Task key={task._id} task={task} />

    ));

  }

  handleSubmit(event) {

    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';

  }
 

  render() {

    return (

      <div className="container">

        <header>

          <h1>Todo List</h1>

          <label className="hide-completed">

            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />

            Hide Completed Tasks

          </label>

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >

            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />

          </form>

        </header>

 

        <ul>

          {this.renderTasks()}

        </ul>

      </div>

    );

  }

}

export default withTracker(() => {

  return {

    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),

  };

})(App);
