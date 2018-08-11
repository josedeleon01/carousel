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
    slides:{
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
  top: 25px;
  left: 25px;
}
.imgWrraper{
  position: relative;
  width: 400px;
  height: 400px;
}
.contentParent{
  position: absolute;
  border: 10px;
}
.controls{
  margin-top: 15px;
  margin-bottom: 15px;
}
.next
{
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}
</style>
