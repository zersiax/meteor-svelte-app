<script>
    import { Meteor } from "meteor/meteor";
    import { CategoriesCollection } from "../api/CategoriesCollection";
    import GroceryForm from "./GroceryForm.svelte";
    import Grocery from "./Grocery.svelte";

   export let category;
   let deletedGrocery;
   const deleteThisCategory = () => {
      Meteor.call("categories.remove", category);
   };
   const deleteGrocery = () => {
      Meteor.call('categories.deleteGrocery', category._Id, deletedGgrocery);
   }
   </script>
<div class="wrapper-input divider">
   <h2 class="title-category margin-bottom-tiny">{ category.text }</h2>
   <button class="button-delete" on:click={deleteThisCategory} aria-label="Delete category { category.text }">
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="16" height="16" fill="none"><path fill="#fff" d="M7.2 5.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L4 5.4 2.2 7.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L2.6 4 .8 2.2C.4 1.8.4 1.2.8.8c.4-.4 1-.4 1.4 0L4 2.6 5.8.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.4 4l1.8 1.8Z"/></svg>
   </button>
</div>

<GroceryForm categoryId={category._id} />

<ul class="grocery-list">
   {#each category.groceries as grocery (grocery.text)} <!-- distinguish by text as categories don't have an ID -->
   <Grocery categoryId={category._id} grocery={grocery.text}  />
 
 {/each}
</ul>
