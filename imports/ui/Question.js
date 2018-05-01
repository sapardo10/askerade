import React, { Component } from 'react';
import classnames from 'classnames';

export default class Question extends Component {

	deleteThisQuestion() {

		Meteor.call('questions.remove', this.props.task._id);

	}


	closeThisQuestion() {

		Meteor.call('questions.setClosed', this.props.question._id, true);

	}

	render() {

		const questionState = classnames({
			completed: this.props.question.closed,
			private: this.props.question.private,
		});

		return (
			<li className={questionState}>

				<span className="text">

		          <strong>{this.props.question.title}</strong> <br/>
		          {this.props.question.text}
		          <br/>
		        </span>

				{ !this.props.question.closed ? (

					<div>

						<button className="delete" onClick={this.deleteThisQuestion.bind(this)}>

							&times;

						</button>

						<button className="close-question" onClick={this.closeThisQuestion.bind(this)}>

							Close

						</button>

					</div>
				) : (

					<button className="statistics">

						Statistics

					</button>
				)}
					

				
			</li>
		);
	}
}
