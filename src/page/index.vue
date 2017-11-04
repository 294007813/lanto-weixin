<template>
  <div >
      <router-view/>
    <lt-footer></lt-footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  export default {
    components:{
      'lt-footer':Footer
    }
  }
</script>

<style>

</style>
