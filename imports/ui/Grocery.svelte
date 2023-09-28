<script>
    import { Meteor } from "meteor/meteor";
    import { CategoriesCollection } from "../api/CategoriesCollection";

    export let categoryId;
    export let grocery;
   const deleteGrocery = () => {
      Meteor.call('categories.deleteGrocery', categoryId, grocery);
   }
   </script>

   <li class="grocery-list-item">
      <span>{grocery}</span>
      <button class="button-completed" on:click={deleteGrocery} aria-label="Delete { grocery }">
         <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 8" width="9" height="8" fill="none"><path fill="#fff" d="M7.789.997c.84-.02 1.259.987.66 1.574l-4.28 4.28a.69.69 0 0 1-.965 0L1.032 4.67c-.902-.86.43-2.193 1.29-1.29L3.53 4.585c.084.084.23.084.325 0L7.16 1.28a.901.901 0 0 1 .63-.284Z"/></svg>
      </button>
   </li> 
