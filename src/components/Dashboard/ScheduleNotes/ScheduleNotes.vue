<template>
    <article>
        <div class="note-container">

        </div>
        <div>

        </div>
    </article>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { ScheduleNote }  from '../../../types/ScheduleNote'

    export default defineComponent({
        name: `ScheduleNotes`,

        data() {
            return {
                notes: [] as ScheduleNote[],
            }
        },
        created() {
            this.fetchNotes();
        },
        methods: {
            async postNote() {
                let response = await fetch(`http://localhost:5208/api/ScheduledTime`, {
                    method: `POST`,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem(`token`)}`,
                    },
                });

            },
            async fetchNotes() {         
                let response = await fetch(`http://localhost:5208/api/ScheduledTime`,{
                    method: `GET`,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem(`token`)}`,
                    },
                });
                if(response.ok){
                    
                    console.log(`ok`);
                    console.log(await response.json());
                    
                }
                else{
                    console.log(`not ok`);
                }
            }
        }
    })


</script>