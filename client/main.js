import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppContainer from '../imports/ui/AppContainer.js';
import { HashRouter  } from 'react-router-dom'



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
*--------------USER COMPONENTS---------------
*-------------------------------------------
*/

import '../imports/startup/accounts-config.js';

/*
*-------------------------------------------
*------------------METHODS------------------
*-------------------------------------------
*/

Meteor.startup(() => {
    render((<HashRouter>
    		<AppContainer />
  		</HashRouter>), document.getElementById('render-target'));
});

