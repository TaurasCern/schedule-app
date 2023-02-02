<template>
    <h1>Header</h1>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: `PageHeader`,
        mounted() {
            let user = localStorage.getItem(`user`);
        }
    }) 
</script>