import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

/*
*-------------------------------------------
*---------------UI COMPONENTS---------------
*-------------------------------------------
*/

import App from '../imports/ui/App.js';

/*
*-------------------------------------------
*--------------API COMPONENTS---------------
*-------------------------------------------
*/

import '../imports/api/tasks.js';

/*
*-------------------------------------------
*------------------METHODS------------------
*-------------------------------------------
*/

Meteor.startup(() => {

  render(<App />, document.getElementById('render-target'));

});

