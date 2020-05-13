<template>

    <div id="app">
        <h1>Math</h1>
        <button v-on:click="getMathTables">Mathtables</button>
    </div>


</template>

<script>
    export default {
        name: "Math",
        data() {
            return {
                mathTablesList: []
            };
        },
        methods:{
            getMathTables(){
                fetch("assets/mathTables.json")
                    .then(response => response.json())
                    .then(data => {this.mathTablesList = data});
                return this.mathTablesList;
            }
        }
    };
</script>

<style scoped>

</style>