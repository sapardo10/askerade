import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
//import Home from "./Home";
import App from "./App";
import Header from "./Header";
/*
import Search from "./Search";
import Products from "./Products";
import Trades from "./Trades";
*/
import { Surveys } from '../api/surveys.js';
import { Questions } from '../api/questions.js';


  


class AppContainer extends Component {

  constructor(props) {

    super(props); 
  }

  renderSurveysNavigator() {
    }

  render() {
    return (
		  <div>
        <Header 
        surveys={this.props.surveys}
        />
        <main>
          <Switch>
          {
            /*
            <Route exact path='/jugar' component={Home}/>

            <Route path='/search' component={Search}/>
            <Route path='/products' component={Products}/>
            <Route path='/trades' component={Trades}/>

            */
            
          }
            <Route exact path ='/' component={App}/>
            <Route path='/products' component={Products}/>

            
          </Switch>
        </main>
      </div>
    );
  }
}

export default withTracker(() => {

  Meteor.subscribe('surveys');
   Meteor.subscribe('questions');


  return {

    surveys: Surveys.find({}).fetch(),
    questions: Questions.find({}, { sort: { createdAt: -1 } }).fetch(),
  };

})(AppContainer);