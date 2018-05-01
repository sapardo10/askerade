import { Accounts } from 'meteor/accounts-base'; 

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  requestPermissions: {
  	microsoft: ['wl.emails','wl.signin','wl.basic']
  }
});