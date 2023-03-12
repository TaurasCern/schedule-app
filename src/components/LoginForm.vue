<template>
    <div class="error" v-if="error">{{ error }}</div>
    <form @submit.prevent="login">
        <div class="form-input">
            <label>Email</label>
            <input type="text" v-model="email">
        </div>
        <div class="form-input">
            <label>Password</label>
            <input type="password" v-model="password">
        </div>
        <input type="button" @click="login()" value="Log in">
    </form>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    import router from '../router';

    export default defineComponent({
        name: `LoginForm`,
        components: {},
        data() {
            return {
                error: ``,
                email: ``,
                password: ``
            };
        },
        methods: {
            async login() {
                let response = await fetch(`http://localhost:5208/api/Login`, {
                    method: `POST`,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.$data.email,
                        password: this.$data.password
                    })
                });
                
                if(response.ok){
                    let json = await response.json();
                    localStorage.setItem(`role`, json.role);
                    localStorage.setItem(`token`, json.token);
                    router.push({ name: 'Dashboard' })
                }
                else {
                    this.$data.error = `Email does not exist or wrong password.`;
                }
            }
        },
    })
</script>

<style scoped>
    .error {
        display: inline-block;
        background-color: rgb(233, 95, 95);
        padding: 5px;
        margin-bottom: 15px;
        border-radius: 5px;
    }
</style>