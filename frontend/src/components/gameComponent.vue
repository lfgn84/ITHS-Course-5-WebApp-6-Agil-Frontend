<template>


    <div>
        <div v-text="level"></div>
        <div>

            <div id="question">{{mathTables.questions[generatedQuestions[chosenQuestion]].text}}</div>    <!--[ Utvalda frågor som listas med ..questions[generatedQuestion[chosenQuestion]]     ] -->

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
        },

        data() {
            return {
                //title: 'Mathtable One',
                mathTables: json,  // json file
                generatedQuestions:[
                    16, 2, 15,28,4,20      // generated random questions
                ],
                chosenQuestion: 0, // index in our generated questions
                nextQ: false, //värde som visar "true" om vi är redo till nästa fråga.
                clicked: false
            }
        },

        methods: {
            nextQuestion: function(){
                this.chosenQuestion ++ // vi går upp en index plats i "generatedQuestions"
                this.clicked = false
            },

            clickAnswer: function(){
                this.clicked = true;
                this.nextQ = true;
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



