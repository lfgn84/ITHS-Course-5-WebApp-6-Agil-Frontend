<template>

    <div class="header">
        <h1>Single Player</h1>

    {{mathTables}}

    </div>
</template>

<script>
    import json from '../assets/json/mathTables'
    export default {
        name: "singlePlay",
        data(){
            return{
                mathTables:json
            }
        }
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');

    .header {
        font-family: 'Luckiest Guy', Tahoma,serif;
        position: fixed;
        width: 100%;
        color: #f8fff9;
        text-align: center;
        background: #2e3af5;
        font-size: 30px;
        margin-left: -10px;
    }



</style>