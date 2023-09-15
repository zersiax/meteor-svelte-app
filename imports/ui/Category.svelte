<script>
    import { CategoriesCollection } from "../api/CategoriesCollection";

   export let category;
   const deleteThisCategory = () => {
      CategoriesCollection.remove(category._id)
   };
   </script>
<h2> { category.text }</h2>
<button class="delete" on:click={deleteThisCategory} aria-label="Delete category { category.text }">&times;</button>
