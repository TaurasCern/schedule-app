<template>
  <NavBar :key="$route.fullPath"/>
  <router-view class="content"/>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import NavBar from './components/NavBar.vue'

  export default defineComponent({
    name:'App',
    components: { NavBar }
  });
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
  .content {
    margin-left: 200px;
  }
</style>