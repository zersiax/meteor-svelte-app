<script>
  import { Meteor } from "meteor/meteor";
  import { CategoriesCollection } from "../api/CategoriesCollection";
  import Category from "./Category.svelte";
  import CategoryForm from "./CategoryForm.svelte";
  import GroceryForm from "./GroceryForm.svelte";
  import Grocery from "./Grocery.svelte";

  let isLoading = true;
  const handler = Meteor.subscribe('categories');
  $m: {
    isLoading = !handler.ready();
  }

  $m: categories = CategoriesCollection.find(
    {},
    { sort: { createdAt: -1 } }
  ).fetch();

  // more information about $m at https://atmospherejs.com/zodern/melte#tracker-statements
const deleteEverything = () => {
Meteor.call("categories.removeAll");
}
</script>

<div class="app">
  <header>
    <div class="app-bar">
      <div class="app-header">
        <h1>📝️ Shoppingbottom</h1>
        <button class="delete" on:click={deleteEverything}>Clear List ⚡💣☠️⛔🚫</button>   
      </div>
    </div>
  </header>
  <div class="main" role="main">
    <!-- good god why does nobody use the main element in tutorials :-O -->

    <CategoryForm />
    <div class="categories">
      {#each categories as category (category._id)}
        <Category {category} />
      {/each}
    </div>
  </div>
</div>
