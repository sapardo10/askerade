import { Meteor } from 'meteor/meteor';
/**
 * Meteor.loginWithMicrosoft(options, callback)
 *
 * This method is used on the client side to summon the Microsoft login page
 * just like you would with any other accounts package. It utilizes the
 * Accounts Base package.
 *
 * @param options
 * @param callback
 */
 /*
Meteor.loginWithMicrosoft({
    requestOfflineToken: true,
    requestPermissions: ['wl.emails','wl.signin','wl.basic'] // Permission scopes are found here: https://msdn.microsoft.com/en-us/library/hh243648.aspx
}, function(error) {
    if (error) {
        console.error('Login failed:', error.reason || error);
    }
    else {
        console.log('Logged in!');
    }
});
*/