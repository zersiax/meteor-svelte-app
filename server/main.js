import { Meteor } from 'meteor/meteor';
import { CategoriesCollection } from '/imports/api/CategoriesCollection';
import '/imports/api/categoriesMethods';
import '/imports/api/categoriesPublications';

const insertCategory = categoryText => {
  CategoriesCollection.insert({ text: categoryText, groceries: [] });
}

