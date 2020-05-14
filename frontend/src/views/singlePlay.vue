<template>

    <div id="Math">
        <h1>Math</h1>
        <button v-on:click="getMathTables"> Show Mathtables </button>
        {{this.mathTablesList}}
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
                fetch("./assets/mathTables.json")
                    .then(response => response.json())
                    .then(data => {this.mathTablesList = data});

            },
        }
    };
</script>

<style scoped>

</style>