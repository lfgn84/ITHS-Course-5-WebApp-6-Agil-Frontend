<!--
<template>
    <div id="game">
    <diV>GAME COMPONENT</diV>
    <div>Choosen level: {{level}}</div>
    <div>Choosen table: {{table}}</div>
    <div>
        <div>Question 1 : {{question}}</div>
        <div></div>
        <button>{{answer1}}</button><button>{{answer2}}</button><button>{{answer3}}</button>
    </div>
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
            play: Boolean
        },
        data(){
            return {
                mathTables: json,

            }
        },

    }
</script>

<style scoped>
#game{
    background-color: #2c3e50;
    color: white;
}
</style>-->
<template>


    <div>
        <div v-text="level"></div>
                <div>
<!--                    <div id="question" >{{mathTables.questions[generatedQuestions[0]].text}}</div>-->
                               <!-- //chosenQuestion=   nummervärde mellan 0-9
                    mathtable.questions[chosenQuestion].text-->
                    <div id="question">{{mathTables.questions[generatedQuestions[chosenQuestion]].text}}</div>
                    <button id="0" v-bind:class="{green : correct0 , red : wrong0 }"  @click="isCorrect($event)">{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].text}}</button>

                    <button id="1" v-bind:class="{green : correct1 , red : wrong1 }"  @click="isCorrect($event)">{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].text}}</button>
                    <button id="2" v-bind:class="{green : correct2 , red : wrong2 }"  @click="isCorrect($event)">{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].text}}</button>
                    <button v-show="nextQ" @click="nextQuestion">NEXT QUESTION</button>

                </div>
    </div>




</template>

<script>
    import json from "../assets/json/test.json"
    export default {
        name: "gameComponent",
        props: {
            level: Number,
        },
        // Create a quiz object with a title and nine questions.
        // A question has one or more answer, and one or more is valid.
        data() {
            return {
                //title: 'Mathtable One',
                mathTables: json,
                questionIndex: 0,
                generatedQuestions:[
                    16, 2, 15,28,4,30
                ],
                //chosenquestion kommer att ¨ka med ++ f¨r att hämta värdet i generatedquestionarrayen
                chosenQuestion: 0,
                correct: false,
                correct0: false,
                wrong0: false,
                correct1: false,
                wrong1:false,
                correct2: false,
                wrong2: false,
                nextQ: false,

               // correct: true




            }

            // quiz: 'quiz',
            // Store current question index
            // questionIndex: 0,
            // An array initialized with "false" values for each question
            // It means: "did the user answered correctly to the question n?" "no".
            // userResponses: Array(this.mathTables.game.level1.table1.questions.length).fill(false)
        }
        ,

        methods: {
            isCorrect: function (event) {
                var targetId = event.currentTarget.id;
                console.log("clicked option :" + targetId);
                this.correct = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[targetId].correct;
                console.log(this.correct);
// kör våran compare answers method
                if(this.correct == true){
                    if(targetId == 0){
                        this.correct0 = true;
                        this.wrong0 = false;

                        this.correct1 = false;
                        this.wrong1 = true;

                        this.correct2 = false;
                        this.wrong2 = true;
                    }else if(targetId == 1){
                        this.correct0 = false;
                        this.wrong0 = true;

                        this.correct1 = true;
                        this.wrong1 = false;

                        this.correct2 = false;
                        this.wrong2 = true;
                    } else if(targetId == 2){
                        this.correct0 =false;
                        this.wrong0 = true;

                        this.correct1 = false;
                        this.wrong1 = true;

                        this.correct2 = true;
                        this.wrong2 = false;
                    }
                } else if (this.correct == false){
                    this.correct0 = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[0].correct;
                    this.wrong0 = !this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[0].correct;

                    this.correct1 = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[1].correct;
                    this.wrong1 = !this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[1].correct;

                    this.correct2 = this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[2].correct;
                    this.wrong2 = !this.mathTables.questions[this.generatedQuestions[this.chosenQuestion]].responses[2].correct;


                }
                this.nextQ = true;
                        },
            nextQuestion: function(){
                this.correct = false
                this.correct0 = false
                this.wrong0 = false
                this.correct1 = false
                this.wrong1 = false
                this.correct2 = false
                this.wrong2 = false
                this.nextQ = false
                this.chosenQuestion ++
            }
                 }


            /* level: function() {
                if (this.level == 1) {
                    this.selectedQuestionsTable1 = this.mathTables.game[0].lvl1[0].t1[0].question;
                    this.answersTable1 = this.mathTables.game[0].lvl1[0].t1[0].answer;
*/
            /*this.selectedQuestionsTable2 = this.mathTables.game.level1.table2.questions;
                    this.answersTable2 = this.mathTables.game.level1.table2.answers;

                    this.selectedQuestionsTable3 = this.mathTables.game.level1.table3.questions;
                    this.answersTable3 = this.mathTables.game.level1.table3.answers;*/

        /*else if (this.level ==2){
                    this.selectedQuestionsTable1 = this.mathTables.game.level2.table4.questions;
                    this.answersTable1 = this.mathTables.game.level2.table4.answers;

                    this.selectedQuestionsTable2 = this.mathTables.game.level2.table5.questions;
                    this.answersTable2 = this.mathTables.game.level2.table5.answers;

                    this.selectedQuestionsTable3 = this.mathTables.game.level2.table6.questions;
                    this.answersTable3 = this.mathTables.game.level2.table6.answers;

                }else if(this.level == 3){
                    this.selectedQuestionsTable1 = this.mathTables.game.level3.table7.questions;
                    this.answersTable1 = this.mathTables.game.level3.table7.answers;

                    this.selectedQuestionsTable2 = this.mathTables.game.level3.table8.questions;
                    this.answersTable2 = this.mathTables.game.level3.table8.answers;

                    this.selectedQuestionsTable3 = this.mathTables.game.level3.table9.questions;
                    this.answersTable3 = this.mathTables.game.level3.table9.answers
                }
    }*/



    }
</script>

<style scoped>
    .green
    {
        border: 1px solid yellow;
        background-color: green;
    }
    .red{
        border: 1px solid red;
        background-color: hotpink;
    }
</style>



