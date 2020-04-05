<template>
  <div>
    <h1 class="text-2xl">Recipe List:</h1>

    Title: <input type="text" class="border" v-model="recipe.title">

    Publisher: <input type="text" class="border" v-model="recipe.publisher">

    <button class="bg-red-500 px-2 py-2 rounded-lg hover:bg-red-300" v-on:click="addRecipe">Add</button>
    <hr/>
    
    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2">Title</th>
          <th class="w-1/4 px-4 py-2">Publisher</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes" :key="recipe.title">
          <td class="border px-4 py-2">{{ recipe.title }}</td>
          <td class="border px-4 py-2">{{recipe.publisher}}</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      recipe: {
        title: '',
        publisher: ''
      },
      recipes: [
        {
          title: "Picadillo",
          publisher: "Heather Smith"
        },
        {
          title: "Chicken Tikka Masala",
          publisher: "Heather Smith"
        }
      ]
    };
  },
  methods: {
    addRecipe: function(event) {
      if(!this.recipe.title) {
        alert("Please add a Title");
        return;
      }
       this.recipes.push(this.recipe);
    }
  }
};
</script>

