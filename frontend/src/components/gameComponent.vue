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
                    <div id="question">{{mathTables.questions[generatedQuestions[choosenQuestion]].text}}</div>
                    <button v-bind:class="{green : correct }">{{mathTables.questions[generatedQuestions[choosenQuestion]].responses[0].text}}</button>

                    <button>{{mathTables.questions[generatedQuestions[choosenQuestion]].responses[1].text}}</button>
                    <button>{{mathTables.questions[generatedQuestions[choosenQuestion]].responses[2].text}}</button>

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
                choosenQuestion: 0,
               correct: true

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
            nextQuestion: function () {

            }

        },

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
</style>



