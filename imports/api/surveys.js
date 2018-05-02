import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Surveys = new Mongo.Collection('surveys');

if (Meteor.isServer) {

    Meteor.publish('surveys', function surveysPublication() {

	    return Surveys.find({});

	});
}

Meteor.methods({

  'surveys.create'() {

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Surveys.insert({
      createdAt: new Date(),
    });

  },


});