<template>


    <div>
        <div v-text="level"></div>
                <div>

                    <div id="question">{{mathTables.questions[generatedQuestions[chosenQuestion]].text}}</div>    <!--[ Utvalda frågor som listas med ..questions[generatedQuestion[chosenQuestion]]     ] -->
                    <button id="0" v-bind:class="{green : correct0 , red : wrong0 }"  @click="isCorrect($event)">{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].text}}</button>
            <!--[3 möjliga svar alternativ från varje utvald fråga som har samma index som frågan. @click=isCorrect($event) skickar "ID" för den knappen man trycker som en del av "click-eventet" ]-->
                    <button id="1" v-bind:class="{green : correct1 , red : wrong1 }"  @click="isCorrect($event)">{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].text}}</button>
            <!--["green" css class aktivieras när svaret är korrect. om svaret är fel så är "red" class som aktivieras i knappen istället. ]-->
                    <button id="2" v-bind:class="{green : correct2 , red : wrong2 }"  @click="isCorrect($event)">{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].text}}</button>
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
                correct: false, // värde som visar om svaret i knappen vi har tryct är rätt eller fel.
                correct0: false, //värde som visar "true" om "option 0" från våran svar alternativ är den rätta svar.
                wrong0: false, //värde som visar "true" om "option 0" från våran svar alternativ är INTE den rätta svar.
                correct1: false, //värde som visar "true" om "option 1" från våran svar alternativ är den rätta svar.
                wrong1:false, //värde som visar "true" om "option 1" från våran svar alternativ är INTE den rätta svar.
                correct2: false, //värde som visar "true" om "option 2" från våran svar alternativ är INTE den rätta svar.
                wrong2: false, //värde som visar "true" om "option 2" från våran svar alternativ är INTE den rätta svar.
                nextQ: false, //värde som visar "true" om vi är redo till nästa fråga.

            }
        },

        methods: {
            isCorrect: function (event) {
                var targetId = event.currentTarget.id;  // här hämtar vi vilken är ID för den tryckta svar knappen.
                console.log("clicked option :" + targetId);
                this.correct = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[targetId].correct; // här lagras vi värde (false eller true) för den svar alternativ man har tryckt på (.responses[targetId].correct).
                console.log(this.correct);
// kör våran compare answers method
                if(this.correct == true){
                    if(targetId == 0){
                        this.correct0 = true;
                        this.wrong0 = false;

                        this.correct1 = false;          // om valt svar är "true" && valt svar alternativ är 0
                        this.wrong1 = true;

                        this.correct2 = false;
                        this.wrong2 = true;
                    }else if(targetId == 1){
                        this.correct0 = false;
                        this.wrong0 = true;

                        this.correct1 = true;
                        this.wrong1 = false;   // om valt svar är "true" && valt svar alternativ är 1

                        this.correct2 = false;
                        this.wrong2 = true;
                    } else if(targetId == 2){
                        this.correct0 =false;
                        this.wrong0 = true;

                        this.correct1 = false;
                        this.wrong1 = true;         // om valt svar är "true" && valt svar alternativ är 2

                        this.correct2 = true;
                        this.wrong2 = false;
                    }
                } else if (this.correct == false){
                    this.correct0 = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[0].correct;
                    this.wrong0 = !this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[0].correct;

                    this.correct1 = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[1].correct;
                    this.wrong1 = !this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[1].correct;  // Om vi har valt fel svar

                    this.correct2 = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[2].correct;
                    this.wrong2 = !this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[2].correct;


                }
                this.nextQ = true; // Gör att "nextQuestion" knapp visas så man kan ta sig till nästa fråga
                        },
            nextQuestion: function(){
                this.correct = false
                this.correct0 = false
                this.wrong0 = false
                this.correct1 = false
                this.wrong1 = false
                this.correct2 = false       // reset alla värde i data() så man kan köra en ny fråga
                this.wrong2 = false
                this.nextQ = false
                this.chosenQuestion ++ // vi går upp en index plats i "generatedQuestions"
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



