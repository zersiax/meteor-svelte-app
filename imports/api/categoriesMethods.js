import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CategoriesCollection } from './CategoriesCollection';
Meteor.methods({
    'categories.insert'(text) {
        check(text, String)
        CategoriesCollection.insert({
            text,
            createdAt: new Date(),

        })
    },
    'categories.remove'(categoryId) {
        check(categoryId, String)
        CategoriesCollection.remove(categoryId);
    },
});
