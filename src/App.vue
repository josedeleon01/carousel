<template>
  <div id="app">
    <Carousel :slides="slides"/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return{
      slides: [
        { path: 'https://www.import.io/wp-content/uploads/2017/10/React-logo.png', id: 1},
        { path: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg', id: 2},
        { path: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg', id: 3},
      ]
    }
  }
}
</script>
