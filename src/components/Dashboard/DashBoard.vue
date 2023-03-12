<template>
    <article>
        <ScheduleBlock/>
        <ScheduleBlock/>

    </article>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import ScheduleBlock from './ScheduleNotes/ScheduleBlock.vue'


    export default defineComponent({
        name: `Dashboard`,
        components: { ScheduleBlock },
    })
</script>
<style scoped>
    article {
        display: flex;
        flex-flow: row wrap;
        justify-items: flex-start;
        width: 80%;
        margin: 0 auto;
    }
</style>