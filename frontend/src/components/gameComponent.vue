<template>
    <div id="game">
    <diV>GAME COMPONENT</diV>
    <div>Choosen level: {{gameLevel}}</div>
    <div>Choosen table: {{gameTable}}</div>
    <div>{{mathTables}}</div>
    </div>
</template>

<script>
    import json from '../assets/json/mathTables.json'
    export default {
        name: "gameComponent",
        props:{
            table: Number,
            level: Number,
        },
        data(){
            return {
                mathTables: json,
                gameTable:"",
                gameLevel:""
            }
        },
        watch:{
            table: function () {
                this.gameTable = this.table
            },
            level: function(){
                this.gameLevel = this.level
            }
        }
    }
</script>

<style scoped>
#game{
    background-color: #2c3e50;
    color: white;
}
</style>