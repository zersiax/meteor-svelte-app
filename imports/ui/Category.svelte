<script>
    import { Meteor } from "meteor/meteor";
    import { CategoriesCollection } from "../api/CategoriesCollection";
    import GroceryForm from "./GroceryForm.svelte";
    import Grocery from "./Grocery.svelte";

   export let category;
   let deletedGrocery;
   const deleteThisCategory = () => {
      CategoriesCollection.remove(category._id)
   };
   const deleteGrocery = () => {
      Meteor.call('categories.deleteGrocery', category._Id, deletedGgrocery);
   }
   </script>
<h2> { category.text }</h2>
<button class="delete" on:click={deleteThisCategory} aria-label="Delete category { category.text }">&times;</button>

<GroceryForm categoryId={category._id} />

<ul>
   {#each category.groceries as grocery (grocery.text)} <!-- distinguish by text as categories don't have an ID -->
   <Grocery categoryId={category._id} grocery={grocery.text}  />
 
 {/each}
</ul>
