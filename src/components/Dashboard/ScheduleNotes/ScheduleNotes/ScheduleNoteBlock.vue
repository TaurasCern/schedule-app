<template>
    <div class="note-container" :id="id?.toString()">
        <div class="note">
            <b>Note:</b> 
            {{ note }}
        </div>
        <div>
            From: {{ from?.toLocaleDateString() + ` - ` + from?.getHours() + `:` + from?.getMinutes() }}
        </div>
        <div>
            To: {{ to?.toLocaleDateString() + ` - ` + to?.getHours() + `:` + to?.getMinutes() }}
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: `ScheduleNotes`,
        props: {
            id: Number,
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
    .note {
        display: flex;
        flex-flow: column;
        background-color: aliceblue;
    }
</style>