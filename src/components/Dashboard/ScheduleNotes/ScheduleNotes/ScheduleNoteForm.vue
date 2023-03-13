<template>
    <form class="note-container" @submit.prevent="postNote">
        <b>New note</b>
        <div class="form-input" id="note-input">
            <label>Note:</label>
            <textarea v-model="note" cols="30" rows="10"></textarea>
        </div>
        <div class="form-input">
            <label>From:</label>
            <input type="datetime-local" v-model="from">
        </div>
        <div class="form-input">
            <label>To:</label>
            <input type="datetime-local" v-model="to">
        </div>
        <input type="button" @click="postNote()" value="Add note">
    </form>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { ScheduleNote }  from '../../../../types/ScheduleNote'
    import { ScheduleNoteRequest }  from '../../../../types/ScheduleNoteRequest'

    export default defineComponent({
        name: `ScheduleNoteForm`,

        data() {
            return {
                from: (new Date()).toISOString().substring(0,16),
                to: (new Date()).toISOString().substring(0,16),
                note: `` as string,
                notes: [] as ScheduleNote[],
            }
        },
        methods: {
            async postNote() {
                let scheduleNote: ScheduleNoteRequest = {
                    from: new Date(this.$data.from),
                    to: new Date(this.$data.to),
                    note: this.$data.note
                }; 
                let response = await fetch(`http://localhost:5208/api/ScheduledTime`, {
                    method: `POST`,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem(`token`)}`,
                    },
                    body: JSON.stringify(scheduleNote),
                });
                if(response.ok){
                    console.log(`ok`);
                }
                else {
                    console.log(`nok ok`);
                    
                }
            }
        }
    })
</script>
<style scoped>
    .note-container{
        display: inline-flex;
        flex-flow: column;
        background-color: #baf3bb;
        width: 280px;
        height: 160px;
        margin: 10px;
    }
    textarea {
        resize: none;
        width: 260px;
        height: 60px;
    }
    #note-input{
        display: flex;
        flex-flow: column;
        margin: 0 auto;
    }
</style>