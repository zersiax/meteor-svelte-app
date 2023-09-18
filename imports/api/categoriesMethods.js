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
    'categories.insertGrocery'(categoryId, newGrocery) {
        console.log(categoryId)
        console.log(newGrocery); // make sure id and grocery exist and make sense 
        CategoriesCollection.update({
            _id: categoryId
        }, {
            $set: {
                updatedDate: new Date() // an attempt to force reactivity by updating a root document key rather than just the array
            },
                $push: {
                    groceries: newGrocery // this works on the database level but not the UI level after the first entry 
                }
        });
    },

    'categories.remove'(categoryId) {
        check(categoryId, String)
        CategoriesCollection.remove(categoryId);
    },
});
