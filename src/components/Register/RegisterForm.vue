<template>
    <form @submit.prevent="register">
        <div class="form-input">
            <label>Email</label>
            <input type="text" v-model="email">
        </div>
        <div class="form-input">
            <label>Password</label>
            <input type="password" v-model="password">
        </div>
        <div class="form-input">
            <label>Repeat password</label>
            <input type="password" v-model="password">
        </div>
        <input type="button" @click="register()" value="Register">
    </form>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    import router from '../../router';

    export default defineComponent({
        name: `RegisterForm`,
        components: {},
        data() {
            return {
                error: ``,
                email: ``,
                password: ``
            };
        },
        methods: {
            async register() {
                let response = await fetch(`http://localhost:5208/api/Register`, {
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
                    router.push({ name: 'RegistrationSuccess' })
                }
                else {
                    this.$data.error = `Password has to 7-20 characters long.`;
                }
            }
        },
    })
</script>