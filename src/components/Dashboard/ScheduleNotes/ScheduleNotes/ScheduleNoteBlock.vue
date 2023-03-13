<template>
    <div class="note-container">
        <div>
            From: {{ from?.toLocaleDateString() + ` - ` + from?.getHours() + `:` + from?.getMinutes() }}
        </div>
        <div>
            To: {{ to?.toLocaleDateString() + ` - ` + to?.getHours() + `:` + to?.getMinutes() }}
        </div>
        <div>
            Note: {{ note }}
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: `ScheduleNotes`,
        props: {
            from: Date,
            to: Date,
            note: String,
        }
    })
</script>
<style scoped>
    .note-container {
        display:  inline-flex;
        flex-flow: column;
        background-color: #baf3bb;
        width: 280px;
        height: 160px;
        margin: 10px;
    }
</style>