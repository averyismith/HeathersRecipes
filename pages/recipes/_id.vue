<template>
  <div class="flex bg-gray-400">
    <div class="bg-gray-100 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{recipe.title}}</div>
        <h2 class="text-lg font-bold py-2">Ingredients</h2>
        <p
          class="text-gray-700 text-base"
        >
          {{ recipe.ingredients }}
        </p>

        <h2 class="text-lg py-2 font-bold">Instructions</h2>
        <p
          class="text-gray-700 text-base"
        >
        {{ recipe.instructions }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#dinner</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#cuban</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >#family-recipe</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.all.find(recipe => recipe.id === this.id);
    }
  }
};
</script>