<template>


    <div>
        <div v-text="level"></div>
        <div>

            <!--[ Utvalda frågor som listas med ..questions[generatedQuestion[chosenQuestion]]     ] -->
            <div id="question">{{mathTables.questions[generatedQuestions[chosenQuestion]].text}}</div>

            <!-- metoden clickanswer sätter variabler till true som talar om att vi har klickat på ett answer och vi är redo att klicka på nextQuestion -->
            <!-- svaret får class red om clicked = true && correct-värdet inte är true (alltså false) -->
            <!-- svaret får class green om clicked = true && correct-värdet är true -->
            <!-- Knappens text är värdet i responses[0].text -->
            <button id="0" @click="clickAnswer()"
                    v-bind:class="{'red': clicked && !mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].correct,
                                   'green': clicked && mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].correct}"
                    >{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].text}}
            </button>

            <button id="1" @click="clickAnswer()"
                    v-bind:class="{'red': clicked && !mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].correct,
                                   'green': clicked && mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].correct}"
                    >{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].text}}
            </button>

            <button id="2" @click="clickAnswer()"
                    v-bind:class="{'red': clicked && !mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].correct,
                                   'green': clicked && mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].correct}"
                    >{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].text}}
            </button>

            <button v-show="nextQ" @click="nextQuestion">NEXT QUESTION</button> <!--[next question button visas när "nextQ" värde är "true". Denna knappen gör "reset" på alla våran värde i data som hjälper oss att dela rätta svar från fel]-->

        </div>
    </div>




</template>

<script>
    import json from "../assets/json/test.json"
    export default {
        name: "gameComponent",
        props: {
            level: Number, //Prop level, ge oss spel "level" som man väljer från "singlePlayer"
            gamecode: Array
        },

        data() {
            return {
                //title: 'Mathtable One',
                mathTables: json,  // json file
                generatedQuestions:this.gamecode,
                //this.gamecode,
                chosenQuestion: 0, // index in our generated questions
                nextQ: false, //värde som visar "true" om vi är redo till nästa fråga.
                clicked: false //boolean som visar om vi klickat på ett av svaren
            }
        },

        methods: {
            nextQuestion: function(){
                this.chosenQuestion ++ // vi går upp en index plats i "generatedQuestions"
                this.clicked = false //nollställer att vi har klickat på ett av svaren när nästa fråga visas
            },

            //när vi klickat på ett av svaren sätts clicked och nextQ till true
            clickAnswer: function(){
                this.clicked = true; //vi har klickat på ett av svaren
                //om vi är på sista frågan så sätts nextQuestion till false
                if(this.generatedQuestions.length > this.chosenQuestion+1){
                this.nextQ = true;  //vi kan visa nextQuestion-knappen för att gå vidare till nästa fråga
                }
                else{
                    this.nextQ = false;
                    //här behöver vi visa en knapp show winner eller show your own result
                }
            }
        },
        watch:{
            gamecode: function(){
                this.generatedQuestions = this.gamecode
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Ranchers&family=Seymour+One&display=swap');
    .green
    {
        border: 1px solid yellow;
        background-color: green;
    }
    .red{
        border: 1px solid red;
        background-color: hotpink;
    }
    #question{
        font-family: 'Seymour One', Tahoma;
        font-size: 180px;
        color: white;
        text-shadow: 7px 0 black;
        margin-left: 400px;
        margin-right: 400px;
        border: 15px #2e3af5;
        background-image: url("https://cssreset.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-11.27.45-AM-1024x468.png");
        border-radius: 200px;
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
        color: darkblue;
        font-size: 3em ;
    }
</style>



