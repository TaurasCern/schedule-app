<template>
    <article>
        <ScheduleNoteForm/>
        <ScheduleNoteBlock 
        v-for="note in $data.notes"
        :key="note.id"
        :from="new Date(note.from)"
        :to="new Date(note.to)"
        :note="note.note"/>
    </article>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { ScheduleNote }  from '../../../../types/ScheduleNote'
    import ScheduleNoteForm from './ScheduleNoteForm.vue'
    import ScheduleNoteBlock from './ScheduleNoteBlock.vue'

    export default defineComponent({
        name: `ScheduleNotes`,
        components: { ScheduleNoteForm, ScheduleNoteBlock },

        data() {
            return {
                from: (new Date()).toISOString().substring(0,16),
                to: (new Date()).toISOString().substring(0,16),
                note: `` as string,
                notes: [] as ScheduleNote[],
            }
        },
        created() {
            this.fetchNotes();
        },
        methods: {
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
                    this.notes = await response.json();              
                }
                else{
                    console.log(`not ok`);
                }
            }
        }
    })
</script>
<style scoped>

</style>