<template>
  <div class='carousel-view'>
      <div v-for="item in slides" :key="item.id">
        <transition-group name="fade">
          <img :src="item.path" :key="item.id"  v-show="item.id == currentImage.id" class="img">
        </transition-group>
      </div>
      <div class="controls">
        <button @click="previous">prev</button>
        <button @click="next">next</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',

  data() {
    return {
      currentNumber: 0
    }
  },

  props: {
    slides: {
      type: Array,
      required: true
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  img {
  position: absolute;
  top: 25px;
  left: 25px;
}
.controls{
  margin-top: 430px;
}
</style>
