<template>
    <div class="note-container" :id="id?.toString()">
        <div class="note">
            <b>Note:</b> 
            {{ note }}
        </div>
        <div class="date" id="end">
            <b>From:</b>{{ formatTime(from) }}
        </div>
        <div class="date">
            <b>To:</b>{{ formatTime(to) }}
        </div>
        <div class="buttons">
            <a href="" >Edit</a>
            <a href="" @click.prevent="deleteScheduledNote">Delete</a>
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
        },
        methods: {
            formatTime(date: Date | undefined) : string {
                if(date === undefined){
                    return `N/A`
                }

                let month = date.getMonth().toString();
                let day = date.getDay().toString();
                let hour = date.getHours().toString();
                let minutes = date.getMinutes().toString();

                return `${date.getFullYear()}-${month.length < 2 ? `0${month}` : month}-${day.length < 2 ? `0${day}` : day}` +
                `: ${hour.length < 2 ? `0${hour}` : hour}:${minutes.length < 2 ? `0${minutes}` : minutes}`;
            },
            async deleteScheduledNote() {
                let response = await fetch(`http://localhost:5208/api/ScheduledTime/${this.id}`, {
                    method: `DELETE`,
                    headers: {
                        'Accept-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem(`token`)}`,
                    },
                });
                if(response.ok) {
                    this.$emit(`deleted`, this.id)
                }
                else {
                    console.log(response.status);                  
                }
            }
        }
    }
)
</script>
<style scoped>
    .note-container {
        display:  inline-flex;
        flex-flow: column;
        background-color: #baf3bb;
        width: 280px;
        height: 160px;
        margin: 10px;
        padding: 10px;
    }
    .note {
        display: flex;
        flex-flow: column;
        background-color: aliceblue;
        word-wrap: break-word;
    }
    .date b {
        display: inline-flex;
        width: 40%;
    }
    #end {
        margin-top: auto;
    }
    a {
        display: inline-flex;
        color: black;
        margin: 0;
        padding: 0;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        margin-left: 19px;
        margin-right: 19px;
    }
</style>