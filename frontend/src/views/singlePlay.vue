<template>
<div>
    <div class="header">
        <h1>Single Player</h1>
    </div>
    <div>Choose multpilication table : <input v-model="input.inputTable"/></div>
    <div>Choose difficulty level : <input v-model="input.inputLevel"/></div>
    <button @click="setConfig">OK</button>
    <gameComponent :table="userTable" :level="userLevel" v-show="gameOn"></gameComponent>

</div>
</template>

<script>
import gameComponent from "../components/gameComponent";
    export default {
        name: "singlePlay",
        components: {gameComponent},
        data(){
            return{
                input:{
                    inputTable: "",
                    inputLevel: ""
                },
                userLevel: "",
                userTable: "",
                gameOn: false




            }
        },
        methods:{
            setConfig: function(){
                let tab = this.input.inputTable;
                this.userTable = tab;
                let lev = this.input.inputLevel;
                this.userLevel = lev;

                this.input.inputTable = "";
                this.input.inputLevel = "";
                this.gameOn = true
            }
        }

}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');

    .header {
        font-family: 'Luckiest Guy', Tahoma,serif;
        width: 100%;
        color: #f8fff9;
        text-align: center;
        background: #2e3af5;
        font-size: 30px;
        margin-left: -10px;
    }



</style>