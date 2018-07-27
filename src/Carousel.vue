<template>
  <div class='carousel-view'>
    <h2>Ejemplo Slider</h2>
      <div>
        <img :src="currentImage">
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
      slides: ['https://www.import.io/wp-content/uploads/2017/10/React-logo.png',
              'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg',
              'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg']
    }
  },

  methods: {
    next() {
      this.currentNumber++;
      console.log(this.currentNumber);

    },
    previous() {
      this.currentNumber--;
    }
  },

  computed: {
    currentImage() {
      if(Math.abs(this.currentNumber) > (this.slides.length - 1))
        this.currentNumber = 0;
      return this.slides[Math.abs(this.currentNumber)];
    }
  }
}
</script>
