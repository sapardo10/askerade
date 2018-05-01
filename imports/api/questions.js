import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {

    Meteor.publish('questions', function questionsPublication() {

	    return Questions.find({});

	});
}

Meteor.methods({

  'questions.insert'(title, text) {

    check(title, String);
    check(text, String);

    if (! this.userId) {

      throw new Meteor.Error('not-authorized');

    }

    Questions.insert({
      title,
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });

  },

  'questions.remove'(questionId) {

    check(questionId, String);

    const question = Questions.findOne(questionId); 

    if (question.owner !== this.userId) {

    	throw new Meteor.Error('not-authorized');

    }

    Questions.remove(questionId);

  },

  'questions.setClosed'(questionId, setClosed) {

    check(questionId, String);

    check(setClosed, Boolean); 

    const question = Questions.findOne(questionId);

    if (question.owner !== this.userId) {

    	throw new Meteor.Error('not-authorized');

    }

    Questions.update(questionId, { $set: { closed: setClosed } });

  },

  'questions.setPrivate'(questionId, setToPrivate) {

    check(questionId, String);

    check(setToPrivate, Boolean); 

    const question = Questions.findOne(questionId);

    if (question.owner !== this.userId) {

      throw new Meteor.Error('not-authorized');

    } 

    Questions.update(questionId, { $set: { private: setToPrivate } });

  },

});