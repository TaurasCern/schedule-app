<template>
    <router-link :to="{ name: 'ScheduleNotes' }" class="block-container">
        <div class="top">
            <b>title</b>
        </div>
        <div class="bottom">
            <b>info</b>
        </div>
    </router-link>
</template>
<style scoped>
    .block-container{
        display: inline-flex;
        flex-flow: column;
        background-color: #baf3bb;
        width: 200px;
        height: 160px;
        margin: 10px;
    }
    .top {
        height: 50px;
        line-height: 50px;
    }
    .bottom {
        height: 110px;
        line-height: 110px;
    }
</style>