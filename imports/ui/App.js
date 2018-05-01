import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import { Questions } from '../api/questions.js';

import Task from './Task.js';
import Question from './Question.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

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

  renderQuestions() {

    let questions = this.props.questions;

    questions = questions.filter(question => !question.completed);
    
    return questions.map((question) => {

      const currentUserId = this.props.currentUser && this.props.currentUser._id;

      return (

        <Question

          key={question._id}

          question={question}

        />

      );

    });

  }


  renderTasks() {

    let filteredTasks = this.props.tasks;

    if (this.state.hideCompleted) {

      filteredTasks = filteredTasks.filter(task => !task.checked);
    
    }

    return filteredTasks.map((task) => {

      const currentUserId = this.props.currentUser && this.props.currentUser._id;

      const showPrivateButton = task.owner === currentUserId;

 

      return (

        <Task

          key={task._id}

          task={task}

          showPrivateButton={showPrivateButton}

        />

      );

    });

  }

  handleSubmit(event) {

    event.preventDefault();

    const title = ReactDOM.findDOMNode(this.refs.title).value.trim();
    const text = ReactDOM.findDOMNode(this.refs.text).value.trim();

    Meteor.call('questions.insert', title, text);

    ReactDOM.findDOMNode(this.refs.title).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';

  }
 

  render() {

    return (

      <div className="container">

        <header>

          <h1>Askerade</h1>

          <AccountsUIWrapper />         

        </header>

         { this.props.currentUser ? (
          <div>
          <h2>Add a question!</h2>

          <form className="new-question" onSubmit={this.handleSubmit.bind(this)}>

            <div className="form-group">

              <input
                className="form-control"
                type="text"
                ref="title"
                placeholder="Type the title of the question"
              />            

            </div>

            <div className="form-group">

              <input
                className="form-control"
                type="text"
                ref="text"
                placeholder="Type the question here"
              />

            </div>

            <input
              className="btn btn-submit"
              type="submit"
              placeholder="Add question"
            />

          </form></div>) : ''
 
        }

        <ul>

          {this.renderQuestions()}

        </ul>

      </div>

    );

  }

}

export default withTracker(() => {

  Meteor.subscribe('tasks');
  Meteor.subscribe('questions');

  return {

    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    questions: Questions.find({}, { sort: { createdAt: -1 } }).fetch(),
  };

})(App);
