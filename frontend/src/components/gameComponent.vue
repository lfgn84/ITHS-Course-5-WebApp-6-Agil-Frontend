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

<!--        <h1>{{ this.title }}</h1>-->
<!--        &lt;!&ndash; index is used to check with current question index &ndash;&gt;-->
<!--        <div v-for="(question, index) in mathTables.game.l" v-bind:key="index">-->
<!--            &lt;!&ndash; Hide all questions, show only the one with index === to current question index &ndash;&gt;-->
<!--            <div v-show="index === questionIndex">-->
<!--                <h2>{{ question.text }}</h2>-->
<!--                <ol>-->
<!--                    <li v-for="(index,response) in questions" v-bind:key="index">-->
<!--                        <label>-->
<!--                            &lt;!&ndash; The radio button has three new directives &ndash;&gt;-->
<!--                            &lt;!&ndash; v-bind:value sets "value" to "true" if the response is correct &ndash;&gt;-->
<!--                            &lt;!&ndash; v-bind:name sets "name" to question index to group answers by question &ndash;&gt;-->
<!--                            &lt;!&ndash; v-model creates binding with userResponses &ndash;&gt;-->
<!--                            <input type="radio"-->
<!--                                   v-bind:value="response.correct"-->
<!--                                   v-bind:name="index"-->
<!--                                   v-model="userResponses[index]"> {{response.text}}-->
<!--                        </label>-->
<!--                    </li>-->
<!--                </ol>-->
<!--                &lt;!&ndash; The two navigation buttons &ndash;&gt;-->
<!--                &lt;!&ndash; Note: prev is hidden on first question &ndash;&gt;-->
<!--                <button v-if="questionIndex > 0" v-on:click="prev">-->
<!--                    prev-->
<!--                </button>-->
<!--                <button v-on:click="next">-->
<!--                    next-->
<!--                </button>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div v-show="questionIndex === quiz.questions.length">-->
<!--            <h2>-->
<!--                Quiz finished-->
<!--            </h2>-->
<!--            <p>-->
<!--                Total score: {{ score() }} / {{ quiz.questions.length }}-->
<!--            </p>-->
<!--        </div>-->
    <div>
        <div v-text="level"></div>
       <div id="table1">
        <div id="1q1">{{selectedQuestionsTable1.q1}}</div>
         <div><button>{{answersTable1.answer1.a}}</button><button>{{answersTable1.answer1.c}}</button><button>{{answersTable1.answer1.b}}</button></div>
        <div id="1q2">{{selectedQuestionsTable1.q2}}</div>
        <div id="1q3">{{selectedQuestionsTable1.q3}}</div>
        <div id="1q4">{{selectedQuestionsTable1.q4}}</div>
        <div id="1q5" >{{selectedQuestionsTable1.q5}}</div>
        <div id="1q6">{{selectedQuestionsTable1.q6}}</div>
        <div id="1q7">{{selectedQuestionsTable1.q7}}</div>
        <div id="1q8">{{selectedQuestionsTable1.q8}}</div>
        <div id="1q9">{{selectedQuestionsTable1.q9}}</div>
        <div id="1q10">{{selectedQuestionsTable1.q10}}</div>
        <div id="1q11">{{selectedQuestionsTable1.q11}}</div>
        </div>

        <div id="table2">
            <div id="2q1">{{selectedQuestionsTable2.q1}}</div>
            <div id="2q2">{{selectedQuestionsTable2.q2}}</div>
            <div id="2q3">{{selectedQuestionsTable2.q3}}</div>
            <div id="2q4">{{selectedQuestionsTable2.q4}}</div>
            <div id="2q5" >{{selectedQuestionsTable2.q5}}</div>
            <div id="2q6">{{selectedQuestionsTable2.q6}}</div>
            <div id="2q7">{{selectedQuestionsTable2.q7}}</div>
            <div id="2q8">{{selectedQuestionsTable2.q8}}</div>
            <div id="2q9">{{selectedQuestionsTable2.q9}}</div>
            <div id="2q10">{{selectedQuestionsTable2.q10}}</div>
            <div id="2q11">{{selectedQuestionsTable2.q11}}</div>
        </div>

        <div id="table3">
            <div id="3q1">{{selectedQuestionsTable3.q1}}</div>
            <div id="3q2">{{selectedQuestionsTable3.q2}}</div>
            <div id="3q3">{{selectedQuestionsTable3.q3}}</div>
            <div id="3q4">{{selectedQuestionsTable3.q4}}</div>
            <div id="3q5" >{{selectedQuestionsTable3.q5}}</div>
            <div id="3q6">{{selectedQuestionsTable3.q6}}</div>
            <div id="3q7">{{selectedQuestionsTable3.q7}}</div>
            <div id="3q8">{{selectedQuestionsTable3.q8}}</div>
            <div id="3q9">{{selectedQuestionsTable3.q9}}</div>
            <div id="3q10">{{selectedQuestionsTable3.q10}}</div>
            <div id="3q11">{{selectedQuestionsTable3.q11}}</div>
        </div>
    </div>



</template>

<script>
    import json from "../assets/json/mathTables.json"
    export default {
        name: "gameComponent",
        props:{
            level: Number,
        },
        // Create a quiz object with a title and nine questions.
        // A question has one or more answer, and one or more is valid.
        data(){
            return {
            //title: 'Mathtable One',
            mathTables: json,
            questionIndex:0,
            selectedQuestionsTable1:[],
                answersTable1:[],
            selectedQuestionsTable2:[],
                answersTable2:[],
            selectedQuestionsTable3:[],
                answersTable3:[],
           // quiz: 'quiz',
            // Store current question index
           // questionIndex: 0,
            // An array initialized with "false" values for each question
            // It means: "did the user answered correctly to the question n?" "no".
           // userResponses: Array(this.mathTables.game.level1.table1.questions.length).fill(false)
        }
    },
        methods: {
    /*        // Go to next question
            next: function () {
                this.questionIndex++;
            },
            // Go to previous question
            prev: function () {
                this.questionIndex--;
            },
            // Return "true" count in userResponses
            score: function () {
                return this.userResponses.filter(function (val) {
                    return val
                }).length;
            }*/
        },
        watch:{
            level: function(){
                if(this.level == 1){
                    this.selectedQuestionsTable1 = this.mathTables.game.level1.table1.questions;
                    this.answersTable1 = this.mathTables.game.level1.table1.answers;

                    this.selectedQuestionsTable2 = this.mathTables.game.level1.table2.questions;
                    this.answersTable2 = this.mathTables.game.level1.table2.answers;

                    this.selectedQuestionsTable3 = this.mathTables.game.level1.table3.questions;
                    this.answersTable3 = this.mathTables.game.level1.table3.answers;

                }else if (this.level ==2){
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
    }

        }
    }
</script>

<style scoped>
</style>



