<template>
  <div id="app">
    <Carousel :slides="slides" />
    <Carousel :slides="slides" />
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return{
      slides: [
        { path: 'https://picsum.photos/400/400/?image=382', id: 1},
        { path: 'https://picsum.photos/400/400/?image=809', id: 2},
        { path: 'https://picsum.photos/400/400/?image=724', id: 3},
      ]
    }
  }
}
</script>
