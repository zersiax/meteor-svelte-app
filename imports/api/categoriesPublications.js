import { Meteor } from 'meteor/meteor';
import { CategoriesCollection } from './CategoriesCollection';

Meteor.publish('categories', function publishCategories() {
    return CategoriesCollection.find({});
});

