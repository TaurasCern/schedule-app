<template>
    <form @submit.prevent="login">
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <input type="button" @click="login()" value="Log in">
    </form>
</template>
<script lang="ts">
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        name: `LoginForm`,
        components: {},
        setup() {
            const email = ref<string>(``);
            const password = ref<string>(``);

            const login = async () => {
                console.log(password.value);
            }
            return { login, email, password }
        }
    })
</script>

<style scoped>

</style>