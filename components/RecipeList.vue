<template>
  <div>
    <h1 class="text-2xl">Recipe List:</h1>
    <!-- Title:
    <input type="text" class="border" v-model="recipe.title" />
    Publisher:
    <input type="text" class="border" v-model="recipe.publisher" />

    <button class="bg-red-500 px-2 py-2 rounded-lg hover:bg-red-300" @click="addRecipe">Add</button>
    <hr /> -->

    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2">Title</th>
          <th class="w-1/4 px-4 py-2">Publisher</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes" :key="recipe.id">
          <td class="border px-4 py-2">
            <nuxt-link
              :to="{name: 'recipes-id', params: {id: recipe.id}}"
              :key="recipe.id"
              class="underline"
            >{{ recipe.title }}</nuxt-link>
          </td>
          <td class="border px-4 py-2">{{recipe.publisher}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


export default {
  data: function(){
    return {
      recipe: {
        title: '',
        publisher: ''
      }
    }

  },
  computed: {
    recipes() {
      return this.$store.state.recipes.all
    }
  },
  methods: {
    addRecipe: function(event) {
     
     
    },
    getRecipes: function() {
      fetch("/.netlify/functions/recipes")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          return json;
        });
    }
  }
};
</script>

