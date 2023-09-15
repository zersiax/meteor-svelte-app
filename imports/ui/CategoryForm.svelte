<script>

import { CategoriesCollection } from "../api/CategoriesCollection";

    let newCategory = "";

    const handleSubmit = () => {
        if (!newCategory) return;
        Meteor.call('categories.insert', newCategory);
        newCategory = '';
    }
</script>
<form class='category-form' on:submit|preventDefault={handleSubmit}>
    <input 
    type='text' 
    name='text' 
    placeholder='Type to add a new category'
    bind:value={newCategory}
     />
    <button type="submit">Add Category</button>
</form>
