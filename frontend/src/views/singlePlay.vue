<template>
    <div id="singlePlay">
        <div id="gameOptions" v-show="!play">
        <div class="header">
            <div id="nav" v-bind:style="'font-size: 35px'">
                <router-link to="/">Home</router-link>
            </div>
            <h1>Single Play !</h1>
        </div>
        <div>
            <!-- välj level, döp rum, skicka till databas. -->
            <div>

                <!-- infotext -->

                <ul class="floatLeft">
                    <li>
                        <p><tab v-bind:style="'background-color: yellow'">Select number of questions:</tab></p>
                    </li>
                    <li>
                        <button @click="selectNumberOfQuestions(5)" v-bind:class="{green : selected3}" >5</button>
                    </li>
                    <li>
                        <button @click="selectNumberOfQuestions(10)" v-bind:class="{green : selected4}" >10</button>
                    </li>
                    <li>
                        <button @click="selectNumberOfQuestions(15)" v-bind:class="{green : selected5}" >15</button>
                    </li>
                </ul>

                <!-- välj level och spara i variabel för att kunna skicka-->
                <ul class="floatLeft">
                    <li>
                        <p><tab v-bind:style="'background-color: yellow'">Select level:</tab></p>
                    </li>
                    <li>
                        <button @click="selectLevel(1)" v-bind:class="{green : selected0}"> Easy </button>
                    </li>
                    <li>
                        <button @click="selectLevel(2)" v-bind:class="{green : selected1}"> Medium </button>
                    </li>
                    <li>
                        <button @click="selectLevel(3)" v-bind:class="{green : selected2}"> Hard </button>
                    </li>

                </ul>

            </div>
        </div>
        </div>
        <!-- show home link -->
        <div v-show="play">
        <router-link to="/">Home</router-link>
        </div>
    <game-component :gamecode="info.gamecode" v-show="play" @right="ratt" @count="count" :reset="reset"></game-component>
        <div id="score" v-show="play" v-bind:style="'background-color: yellow'">
      Your score :  {{score}}
            <div class="divider"/>
        Questions answered :{{counter}}
        </div>
<button v-show="finishedGame" @click="reseting">RESTART </button> <div class="divider"/> <button v-show="finishedGame"><router-link to="/">Home</router-link></button>
        <footerComponent></footerComponent>

    </div>
</template>
<script>
    import footerComponent from "../components/footerComponent";
    import GameComponent from "../components/gameComponent";
    // import startPage from "../components/startPage";
    export default {
        name: 'singlePlay',
        components: {
            GameComponent,
            footerComponent
        },
        data(){
            return{
                info:{
                    gamecode: []
                },
                selected0: false,
                selected1: false,
                selected2: false,
                selected3: false,
                selected4: false,
                selected5: false,
                selectedNumberOfQuestions: 10,
                active: false,
                play:false,
                score: 0,
                counter: 0,
                finishedGame : false,
                reset: false
            }
        },
        methods: {
            selectLevel: function(inputz) {
                if (this.active == false) {
                    this.responseText = "Please select how many questions you want."
                }

                switch (inputz) {
                    case 1:
                        this.selected0 = true;
                        this.selected1 = false;
                        this.selected2 = false;
                        break;
                    case 2:
                        this.selected1 = true;
                        this.selected0 = false;
                        this.selected2 = false;
                        break;
                    case 3:
                        this.selected2 = true;
                        this.selected0 = false;
                        this.selected1 = false;
                        break;
                }

                var level = inputz;
                var gameCodeArray = [9999];
                var numberOfQuestions = this.selectedNumberOfQuestions;
                var i = 0;
                while (i < numberOfQuestions) {                                  // 10 = antalet frågor som skall spelas
                    var x = 0;
                    switch (level) {
                        case 1:
                            x = Math.floor((Math.random() * 30) + 1);
                            break;
                        case 2:
                            x = Math.floor((Math.random() * 30) + 31);
                            break;
                        case 3:
                            x = Math.floor((Math.random() * 39) + 61);
                            break;
                    }
                    if (!gameCodeArray.includes(x)) {
                        if (gameCodeArray[0] == 9999) {
                            gameCodeArray.shift()
                        }
                        gameCodeArray.push(x)
                        i++;
                    }
                    this.info.gamecode = gameCodeArray
                }
                this.play = true
                this.reset = false
            },
            ratt: function(value){
                this.score += value
            },
            count: function(value){
                this.counter += value
            },
            reseting: function(){
                this.play = false;
                this.score = 0;
                this.counter = 0;
                this.selected0= false;
                    this.selected1= false;
                    this.selected2= false;
                    this.selected3= false;
                    this.selected4= false;
                    this.selected5= false;
                    this.reset = true;
                    this.finishedGame = false;

            },
            sendInfo: function() {

                var gamecode = this.info.gamecode;

                /*check if a level has been selected*/
                if (gamecode == "") {
                    this.responseText = "please select level"
                }
            },
            selectNumberOfQuestions: function(n){
                this.active = true;
                this.selectedNumberOfQuestions = n;

                switch(n) {
                    case 5:
                        this.selected3 = true;
                        this.selected4 = false;
                        this.selected5 = false;

                        break;
                    case 10:
                        this.selected3 = false;
                        this.selected4 = true;
                        this.selected5 = false;
                        break;
                    case 15:
                        this.selected3 = false;
                        this.selected4 = false;
                        this.selected5 = true;
                        break;
                }

            }

        },
        watch:{
            counter: function(){
               if(this.counter == this.selectedNumberOfQuestions){
                   this.finishedGame = true
    }
            }
        }
    }
</script>
<style>
    #singlePlay{
        background-image: url("../../public/math.png");
        background-repeat: no-repeat;
        background-size: 100%;
        height: 1200px;
        font-family: 'Luckiest Guy', Tahoma;
        font-size: 20px;
    }
    ul{
        list-style-type: none;

    }
    .green
    {
        background-color: green;
    }
    button{
        border-radius: 50px ;
        height: 100px ;
        width: 100px ;
        background-color: #93D2FA;
        border-bottom-color: #1C75AD ;
        border-bottom-width:5px ;
        border-right-width: 5px;
        border-right-color: #1C75AD ;
        font-family: 'Luckiest Guy', Tahoma;
        color: black;

        font-size: 3em ;
    }
    tab{
        font-size: 40px;
        position:relative;
        bottom:50px;
        color: black;

    }
    h1{
        color: orangered;
        font-size: 80px;
    }
    .divider{
        width:300px;
        height:auto;
        display:inline-block;
    }
    #score{
        font-size: 38px;
        color: black;
    }

    .floatLeft {
        float: left;
    }
</style>