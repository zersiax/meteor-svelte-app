import { Meteor } from 'meteor/meteor';
import { CategoriesCollection } from '/imports/api/CategoriesCollection';
import '/imports/api/categoriesMethods';
import '/imports/api/categoriesPublications';

const insertCategory = categoryText => {
  CategoriesCollection.insert({ text: categoryText });
}


Meteor.startup(async () => {
  CategoriesCollection.remove({})
  if (await CategoriesCollection.find().countAsync() === 0) {
    [
      'First dinner',
      'Second Dinner',
      'third dinner',
      'Fourth dinner',
      'Fifth Dinner',
      'Sixth Dinner',
      'breakfast'

    ].forEach(insertCategory)
    categoriesCollection.updateMany({}, { $set: { groceries: []}});                          
  }


});
