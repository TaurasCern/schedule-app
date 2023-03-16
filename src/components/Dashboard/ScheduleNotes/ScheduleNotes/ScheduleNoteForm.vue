<template>
    <form class="note-form-container">
        <div class="form-input" id="note-input">
            <label><b>New note</b></label>
            <textarea v-model="note" cols="30" rows="10" maxlength="150"></textarea>
        </div>
        <div class="date" id="end">
            <label><b>From:</b></label>
            <input type="datetime-local" v-model="from">
        </div>
        <div class="date">
            <label><b>To:</b></label>
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
                from: this.getFromDate() as string | Date,
                to: this.getToDate() as string | Date,
                note: `` as string,
                notes: [] as ScheduleNote[],
            }
        },
        methods: {
            getFromDate() {
                let date = new Date();
                let month = date.getMonth().toString();
                let day = date.getDay().toString();
                let hour = date.getHours().toString();
                let minutes = date.getMinutes().toString();

                return `${date.getFullYear()}-${month.length < 2 ? `0${month}` : month}-${day.length < 2 ? `0${day}` : day}` +
                `T${hour.length < 2 ? `0${hour}` : hour}:${minutes.length < 2 ? `0${minutes}` : minutes}`;
            },
            getToDate() {
                let date = new Date();
                let minutes = (date.getMinutes() + 15) > 59 ? `59` : (date.getMinutes() + 15).toString();
                let hour = date.getHours().toString();
                let day = date.getDay().toString();
                let month = date.getMonth().toString();

                return `${date.getFullYear()}-${month.length < 2 ? `0${month}` : month}-`+
                `${day.length < 2 ? `0${day}` : day}T${hour.length < 2 ? `0${hour}` : hour}:${minutes}`;
            },
            async postNote() {
                let scheduleNote: ScheduleNoteRequest = {
                    from: new Date(this.$data.from),
                    to: new Date(this.$data.to),
                    note: this.$data.note as string
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
                    this.$emit(`posted`, await response.json())
                }
                else {
                    console.log(response.status);                  
                }
            }
        }
    })
</script>
<style scoped>
    .note-form-container{
        display: inline-flex;
        flex-flow: column;
        background-color: #baf3bb;
        width: 280px;
        height: 160px;
        margin: 10px;
        padding: 10px;
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
    .date {
        display: inline-flex;
    }
    .date label {
        display: inline-flex;
        width: 40%;
    }
    #end {
        margin-top: auto;
    }
</style>