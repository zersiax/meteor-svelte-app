<script>
  import { Meteor } from "meteor/meteor";
  import { CategoriesCollection } from "../api/CategoriesCollection";
  import Category from "./Category.svelte";
  import CategoryForm from "./CategoryForm.svelte";

  $m: categories = CategoriesCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  let subIsReady = false;
  $m: {
    const handle = Meteor.subscribe("categories.all");
    subIsReady = handle.ready();
  }

  // more information about $m at https://atmospherejs.com/zodern/melte#tracker-statements
</script>

<div class="container">
  <header>
    <h1>Shoppingbottom</h1>
    <p>Shop before you hit rock bottom</p>
  </header>
  <CategoryForm />

  {#each categories as category (category._id)}
    <Category {category} />
  {/each}
</div>
