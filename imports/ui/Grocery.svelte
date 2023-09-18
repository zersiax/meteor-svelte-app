<script>
    import { Meteor } from "meteor/meteor";
    import { CategoriesCollection } from "../api/CategoriesCollection";

    export let categoryId;
    export let grocery;
   const deleteGrocery = () => {
      Meteor.call('categories.deleteGrocery', categoryId, grocery);
   }
   </script>

   <li> {grocery } 
      <button class="delete" on:click={deleteGrocery} aria-label="Delete { grocery }">&times;</button>
   </li> 
