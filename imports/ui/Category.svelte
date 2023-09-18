<script>
    import { CategoriesCollection } from "../api/CategoriesCollection";
    import GroceryForm from "./GroceryForm.svelte";

   export let category;
   const deleteThisCategory = () => {
      CategoriesCollection.remove(category._id)
   };
   </script>
<h2> { category.text }</h2>
<button class="delete" on:click={deleteThisCategory} aria-label="Delete category { category.text }">&times;</button>

<GroceryForm categoryId={category._id} />

<ul>
   {#each category.groceries as grocery (grocery.text)} <!-- distinguish by text as categories don't have an ID -->
   <li> {grocery} </li> <!-- this currently only works for the very first addeed grocery -->
 {/each}
</ul>
