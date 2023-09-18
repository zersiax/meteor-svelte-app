<script>

import { CategoriesCollection } from "../api/CategoriesCollection";
    import Category from "./Category.svelte";

    let newGrocery = "";
   export let categoryId; 

    const handleSubmit = () => {
        if (!newGrocery) return;
        Meteor.call('categories.insertGrocery', categoryId, newGrocery);
        newGrocery = '';
    }
</script>
<form class='grocery-form' on:submit|preventDefault={handleSubmit}>
    <input 
    type='text' 
    name='text2' 
    placeholder='What is it you need?'
    bind:value={newGrocery}
     />
    <button type="submit">Add to list</button>
</form>
