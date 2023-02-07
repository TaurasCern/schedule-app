<template>
  <header v-if="isLoggedIn">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <a @click="logout()" href="">Logout</a>
  </header>
  <header v-else>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Login' }">Log in</router-link>
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </header>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
      name: `PageHeader`,
      data() {
        return {
          isLoggedIn: localStorage.token ? true : false
        }
      },
      methods: {
        logout() {
          localStorage.removeItem(`role`);
          localStorage.removeItem(`token`);
        }
      }
    }) 
</script>
<style>
    header {
      background-color: #baf3bb;
      padding: 20px;
      margin-bottom: 60px;
    }

    a {
      font-weight: bold;
      color: #42b983;
      padding: 10px;
      text-decoration: none;
      font-size: 20px;
    }

    a.router-link-exact-active {
      color: #1d3c2e;
    }
</style>