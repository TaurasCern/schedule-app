<template>
    <article>
        <ScheduleNoteForm @posted="onPost"/>
        <ScheduleNoteBlock 
        v-for="note in $data.notes"
        :key="note.id"
        :id="note.id"
        :from="new Date(note.from)"
        :to="new Date(note.to)"
        :note="note.note"
        @deleted="onDelete"/>
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
                    console.log(response.status);
                }
            },
            async onPost(note: ScheduleNote) {
                this.notes.push(note)
            },
            async onDelete(id: string) {
                let index = this.notes.map(note => note.id).indexOf(parseInt(id));
                this.notes.splice(index, 1)
            }
        }
    })
</script>
<style scoped>

</style>