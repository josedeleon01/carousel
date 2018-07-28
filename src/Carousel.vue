<template>
  <div class='carousel-view'>
    <h2>Ejemplo Slider</h2>
      <div v-for="item in slides" :key="item.id">
        <img :src="item.path" v-show="item.id == currentImage.id">
      </div>
      <div>
        <button @click="previous">prev</button>
        <button @click="next">next</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',

  data() {
    return {
      currentNumber: 0,
      slides: [
        { path: 'https://www.import.io/wp-content/uploads/2017/10/React-logo.png', id: 1},
        { path: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg', id: 2},
        { path: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg', id: 3},
      ]
    }
  },

  methods: {
    next() {
      this.currentNumber++;
      if(this.currentNumber > (this.slides.length - 1))
        this.currentNumber = 0;
    },
    previous() {
      this.currentNumber--;
      if(Math.abs(this.currentNumber) > (this.slides.length - 1))
        this.currentNumber = 0;
    }
  },

  computed: {
    currentImage() {
      return this.slides[Math.abs(this.currentNumber)];
    }
  }
}
</script>

<style>

</style>
