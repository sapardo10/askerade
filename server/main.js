import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'; 
import { Tasks } from '../imports/api/tasks.js';
import { Questions } from '../imports/api/questions.js';
import { Surveys } from '../imports/api/surveys.js';

Meteor.startup(() => {
  // code to run on server at startup
  ServiceConfiguration.configurations.upsert(
    { service: 'microsoft' },
    {
      $set: {
        clientId: '0833e196-5890-431f-9fe4-015fdbf87de0',
        loginStyle: 'popup',
        secret: 'zxRKK89928$lhgppLGDM%!}',
      },
    }
  );

  
});
