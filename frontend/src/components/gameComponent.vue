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
         <div><button @click="rightAnswer" v-bind:class="{green : isActive1}" >{{answersTable1.answer1.a}}</button><button>{{answersTable1.answer1.c}}</button><button>{{answersTable1.answer1.b}}</button></div>

       <div id="1q2">{{selectedQuestionsTable1.q2}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive2}">{{answersTable1.answer2.a}}</button><button>{{answersTable1.answer2.c}}</button><button>{{answersTable1.answer2.b}}</button></div>

       <div id="1q3">{{selectedQuestionsTable1.q3}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive3}">{{answersTable1.answer3.a}}</button><button>{{answersTable1.answer3.c}}</button><button>{{answersTable1.answer3.b}}</button></div>

       <div id="1q4">{{selectedQuestionsTable1.q4}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive4}">{{answersTable1.answer4.a}}</button><button>{{answersTable1.answer4.c}}</button><button>{{answersTable1.answer4.b}}</button></div>

           <div id="1q5" >{{selectedQuestionsTable1.q5}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive5}">{{answersTable1.answer5.a}}</button><button>{{answersTable1.answer5.c}}</button><button>{{answersTable1.answer5.b}}</button></div>

           <div id="1q6">{{selectedQuestionsTable1.q6}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive6}">{{answersTable1.answer6.a}}</button><button>{{answersTable1.answer6.c}}</button><button>{{answersTable1.answer6.b}}</button></div>

           <div id="1q7">{{selectedQuestionsTable1.q7}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive7}">{{answersTable1.answer7.a}}</button><button>{{answersTable1.answer7.c}}</button><button>{{answersTable1.answer7.b}}</button></div>

           <div id="1q8">{{selectedQuestionsTable1.q8}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive8}">{{answersTable1.answer8.a}}</button><button>{{answersTable1.answer8.c}}</button><button>{{answersTable1.answer8.b}}</button></div>

           <div id="1q9">{{selectedQuestionsTable1.q9}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive9}">{{answersTable1.answer9.a}}</button><button>{{answersTable1.answer9.c}}</button><button>{{answersTable1.answer9.b}}</button></div>


           <div id="1q10">{{selectedQuestionsTable1.q10}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive10}">{{answersTable1.answer10.a}}</button><button>{{answersTable1.answer10.c}}</button><button>{{answersTable1.answer10.b}}</button></div>

           <div id="1q11">{{selectedQuestionsTable1.q11}}</div>
           <div><button @click="rightAnswer" v-bind:class="{green : isActive11}">{{answersTable1.answer11.a}}</button><button>{{answersTable1.answer11.c}}</button><button>{{answersTable1.answer11.b}}</button></div>

       </div>

        <div id="table2">
            <div id="2q1">{{selectedQuestionsTable2.q1}}</div>
            <div><button>{{answersTable2.answer1.a}}</button><button>{{answersTable2.answer1.c}}</button><button>{{answersTable2.answer1.b}}</button></div>

            <div id="2q2">{{selectedQuestionsTable2.q2}}</div>
            <div><button>{{answersTable2.answer2.a}}</button><button>{{answersTable2.answer2.c}}</button><button>{{answersTable2.answer2.b}}</button></div>

            <div id="2q3">{{selectedQuestionsTable2.q3}}</div>
            <div><button>{{answersTable2.answer3.a}}</button><button>{{answersTable2.answer3.c}}</button><button>{{answersTable2.answer3.b}}</button></div>

            <div id="2q4">{{selectedQuestionsTable2.q4}}</div>
            <div><button>{{answersTable2.answer4.a}}</button><button>{{answersTable2.answer4.c}}</button><button>{{answersTable2.answer4.b}}</button></div>

            <div id="2q5" >{{selectedQuestionsTable2.q5}}</div>
            <div><button>{{answersTable2.answer5.a}}</button><button>{{answersTable2.answer5.c}}</button><button>{{answersTable2.answer5.b}}</button></div>

            <div id="2q6">{{selectedQuestionsTable2.q6}}</div>
            <div><button>{{answersTable2.answer6.a}}</button><button>{{answersTable2.answer6.c}}</button><button>{{answersTable2.answer6.b}}</button></div>

            <div id="2q7">{{selectedQuestionsTable2.q7}}</div>
            <div><button>{{answersTable2.answer7.a}}</button><button>{{answersTable2.answer7.c}}</button><button>{{answersTable2.answer7.b}}</button></div>

            <div id="2q8">{{selectedQuestionsTable2.q8}}</div>
            <div><button>{{answersTable2.answer8.a}}</button><button>{{answersTable2.answer8.c}}</button><button>{{answersTable2.answer8.b}}</button></div>

            <div id="2q9">{{selectedQuestionsTable2.q9}}</div>
            <div><button>{{answersTable2.answer9.a}}</button><button>{{answersTable2.answer9.c}}</button><button>{{answersTable2.answer9.b}}</button></div>

            <div id="2q10">{{selectedQuestionsTable2.q10}}</div>
            <div><button>{{answersTable2.answer10.a}}</button><button>{{answersTable2.answer10.c}}</button><button>{{answersTable2.answer10.b}}</button></div>

            <div id="2q11">{{selectedQuestionsTable2.q11}}</div>
            <div><button>{{answersTable2.answer11.a}}</button><button>{{answersTable2.answer11.c}}</button><button>{{answersTable2.answer11.b}}</button></div>

        </div>

        <div id="table3">
            <div id="3q1">{{selectedQuestionsTable3.q1}}</div>
            <div><button>{{answersTable3.answer1.a}}</button><button>{{answersTable3.answer1.c}}</button><button>{{answersTable3.answer1.b}}</button></div>

            <div id="3q2">{{selectedQuestionsTable3.q2}}</div>
            <div><button>{{answersTable3.answer2.a}}</button><button>{{answersTable3.answer2.c}}</button><button>{{answersTable3.answer2.b}}</button></div>

            <div id="3q3">{{selectedQuestionsTable3.q3}}</div>
            <div><button>{{answersTable3.answer3.a}}</button><button>{{answersTable3.answer3.c}}</button><button>{{answersTable3.answer3.b}}</button></div>

            <div id="3q4">{{selectedQuestionsTable3.q4}}</div>
            <div><button>{{answersTable3.answer4.a}}</button><button>{{answersTable3.answer4.c}}</button><button>{{answersTable3.answer4.b}}</button></div>

            <div id="3q5" >{{selectedQuestionsTable3.q5}}</div>
            <div><button>{{answersTable3.answer5.a}}</button><button>{{answersTable3.answer5.c}}</button><button>{{answersTable3.answer5.b}}</button></div>

            <div id="3q6">{{selectedQuestionsTable3.q6}}</div>
            <div><button>{{answersTable3.answer6.a}}</button><button>{{answersTable3.answer6.c}}</button><button>{{answersTable3.answer6.b}}</button></div>

            <div id="3q7">{{selectedQuestionsTable3.q7}}</div>
            <div><button>{{answersTable3.answer7.a}}</button><button>{{answersTable3.answer7.c}}</button><button>{{answersTable3.answer7.b}}</button></div>

            <div id="3q8">{{selectedQuestionsTable3.q8}}</div>
            <div><button>{{answersTable3.answer8.a}}</button><button>{{answersTable3.answer8.c}}</button><button>{{answersTable3.answer8.b}}</button></div>


            <div id="3q9">{{selectedQuestionsTable3.q9}}</div>
            <div><button>{{answersTable3.answer9.a}}</button><button>{{answersTable3.answer9.c}}</button><button>{{answersTable3.answer9.b}}</button></div>

            <div id="3q10">{{selectedQuestionsTable3.q10}}</div>
            <div><button>{{answersTable3.answer10.a}}</button><button>{{answersTable3.answer10.c}}</button><button>{{answersTable3.answer10.b}}</button></div>

            <div id="3q11">{{selectedQuestionsTable3.q11}}</div>
            <div><button>{{answersTable3.answer11.a}}</button><button>{{answersTable3.answer11.c}}</button><button>{{answersTable3.answer11.b}}</button></div>

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

                active:{
                    isActive1: false,
                    isActive2: false,
                    isActive3: false,
                    isActive4: false,
                    isActive5: false,
                    isActive6: false,
                    isActive7: false,
                    isActive8: false,
                    isActive9: false,
                    isActive10: false,
                    isActive11: false,
                    isActive12: false,
                    isActive13: false,
                    isActive14: false,
                    isActive15: false,
                    isActive16: false,
                    isActive17: false,
                    isActive18: false,
                    isActive19: false,
                    isActive20: false,
                    isActive21: false,
                    isActive22: false,
                    isActive23: false,
                    isActive24: false,
                    isActive25: false,
                    isActive26: false,
                    isActive27: false,
                    isActive28: false,
                    isActive29: false,
                    isActive30: false,
                    isActive31: false,
                    isActive32: false,
                    isActive33: false,

                }

           // quiz: 'quiz',
            // Store current question index
           // questionIndex: 0,
            // An array initialized with "false" values for each question
            // It means: "did the user answered correctly to the question n?" "no".
           // userResponses: Array(this.mathTables.game.level1.table1.questions.length).fill(false)
        }
    },

        methods:{
            rightAnswer1: function(){
                    this.isActive1 = true
            },
            rightAnswer2: function(){
                this.isActive2 = true
            },
            rightAnswer3: function(){
                this.isActive3 = true
            },
            rightAnswer4: function(){
                this.isActive4 = true
            },
            rightAnswer5: function(){
                this.isActive5 = true
            },
            rightAnswer6: function(){
                this.isActive6 = true
            },
            rightAnswer7: function(){
                this.isActive7 = true
            },
            rightAnswer8: function(){
                this.isActive8 = true
            },
            rightAnswer9: function(){
                this.isActive9 = true
            },
            rightAnswer10: function(){
                this.isActive10 = true
            },
            rightAnswer11: function(){
                this.isActive11 = true
            },
            rightAnswer12: function(){
                this.isActive12 = true
            },
            rightAnswer13: function(){
                this.isActive13 = true
            },
            rightAnswer14: function(){
                this.isActive14 = true
            },
            rightAnswer15: function(){
                this.isActive15 = true
            },
            rightAnswer16: function(){
                this.isActive16 = true
            },
            rightAnswer17: function(){
                this.isActive17 = true
            },
            rightAnswer18: function(){
                this.isActive18 = true
            },
            rightAnswer19: function(){
                this.isActive19 = true
            },
            rightAnswer20: function(){
                this.isActive20 = true
            },
            rightAnswer21: function(){
                this.isActive21 = true
            },
            rightAnswer22: function(){
                this.isActive22 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
            rightAnswer1: function(){
                this.isActive1 = true
            },
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
    .green
    {
        border: 1px solid yellow;
        background-color: green;
    }
</style>



