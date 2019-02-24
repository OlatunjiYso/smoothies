<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" v-bind:key="smoothie.id">
      <div class="card-content" v-on:click="removeSmoothie(smoothie.id)">
        <i class="material-icons delete">delete</i>
         <h2 class="indigo-text">{{ smoothie.title }}</h2>
         <ul class="ingredients">
            <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
         </ul>
      </div>
    </div>
    <div class="test">
      <h2> Hallanananan </h2>
    </div>
    <div class="test">
      <h2> Hallanananan </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      smoothies: [
        { title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['bananas', 'coffee', 'milk'], id: '1' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: '2' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: '3' },
        { title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['bananas', 'coffee', 'milk'], id: '1' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: '2' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: '3' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: '3' },
      ]
    }
  },
  methods: {
    removeSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != id
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
  color: green;
}
.index .ingredients{
  margin: 30px auto;
}
.delete {
  position: absolute;
  top: 4px;
  right: 6px;
  color:rgb(250, 219, 179);
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
