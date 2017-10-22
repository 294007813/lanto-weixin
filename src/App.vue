<template>
  <div id="app">
    <router-view/>
    <lt-footer></lt-footer>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    name: 'app',
    components:{
      'lt-footer':Footer
    }
  }
</script>

<style>

</style>
