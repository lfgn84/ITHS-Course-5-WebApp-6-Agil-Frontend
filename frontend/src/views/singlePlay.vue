<template>
<div>
    <div class="header">
        <h1>Single Player</h1>
    </div>
    <div>Choose difficulty level :
        <button @click="level1">1</button>
        <button @click="level2">2</button>
        <button @click="level3">3</button>
    </div>


<game-component :level="userLevel" v-show="play"></game-component>
</div>
</template>

<script>
import gameComponent from "../components/gameComponent";
    export default {
        name: "singlePlay",
        components: {gameComponent},
        data(){
            return{
                userLevel: "",
                play: false




            }
        },
        methods:{
            level1:function(){
                this.userLevel = 1;
                this.play = true;
            },
            level2:function(){
            this.userLevel = 2;
                this.play = true;
            },
            level3:function(){
            this.userLevel = 3;
                this.play = true;
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