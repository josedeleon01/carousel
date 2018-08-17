<template>
  <div class='carousel-view'>
    <div class="imgWrraper">
      <div v-for="item in slides" :key="item.id" class="contentParent">
        <transition name="fade">
          <img :src="item.path" :key="item.id"  v-show="item.id == currentImage.id">
        </transition>
      </div>
      <slot></slot>
    </div>
    <div class="controls">
      <span @click="previous">Prev</span>
      <span @click="next">Next</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      currentNumber: 0
    };
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
      if (this.currentNumber > this.slides.length - 1) this.currentNumber = 0;
    },
    previous() {
      this.currentNumber--;
      if (Math.abs(this.currentNumber) > this.slides.length - 1)
        this.currentNumber = 0;
    }
  },

  computed: {
    currentImage() {
      return this.slides[Math.abs(this.currentNumber)];
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
img {
  top: 25px;
  left: 25px;
  border: 5px solid #fff;
}
.imgWrraper {
  position: relative;
  width: 400px;
  height: 400px;
}
.contentParent {
  position: absolute;
  border: 10px;
}
.controls {
  color: #fff;
  display: inline-block;
  margin: 10px;
  padding: 3px 10px;
  font-size: 12px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  align-content: center;
}
.controls span {
  color: #ffffff;
  display: inline-block;
  margin: 5px;
  padding: 3px 10px;
  font-size: 12px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background: #a9bdb6;
  cursor: pointer;
}
.controls span:hover {
  background: #869791;
  opacity: 1;
}
.carousel-view {
  align-content: center;
}
</style>
