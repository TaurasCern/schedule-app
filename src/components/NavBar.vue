<template>
  <header v-if="isLoggedIn">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
    <a @click="logout()" href="" class="last-item">Logout</a>
  </header>
  <header v-else>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Login' }" class="last-item">Log in</router-link>
    <router-link :to="{ name: 'Register' }" >Register</router-link>
  </header>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
      name: `NavBar`,
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
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      min-height: min-content;
      width: 200px;

      background-color: #baf3bb;
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
    .last-item {
      margin-top: auto;
    }
</style>