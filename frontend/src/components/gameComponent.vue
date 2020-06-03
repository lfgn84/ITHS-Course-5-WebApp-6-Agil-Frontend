<template>


    <div>
        <div v-text="level"></div>
        <div>
            <!--https://github.com/franktopel/vue-defuse/blob/master/src/components/VueDefuse.vue-->
            <!-- timer format-timer ligger under data i filters och gör så att timePassed visas 00:00 ist för antal sekunder-->
            <span class="timer" v-show="showTimer">⌛ {{ timePassed | formatTimer }}</span>

            <!--[ Utvalda frågor som listas med ..questions[generatedQuestion[chosenQuestion]]     ] -->
            <div id="question">{{mathTables.questions[generatedQuestions[chosenQuestion]].text}}</div>

            <!-- metoden clickanswer sätter variabler till true som talar om att vi har klickat på ett answer och vi är redo att klicka på nextQuestion -->
            <!-- svaret får class red om clicked = true && correct-värdet inte är true (alltså false) -->
            <!-- svaret får class green om clicked = true && correct-värdet är true -->
            <!-- Knappens text är värdet i responses[0].text -->
            <button id="0" :disabled="isDisabled" @click="clickAnswer(mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].correct)"
                    v-bind:class="{'red': clicked && !mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].correct,
                                   'green': clicked && mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].correct}"
                    >{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[0].text}}
            </button>

            <button id="1" :disabled="isDisabled" @click="clickAnswer(mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].correct)"
                    v-bind:class="{'red': clicked && !mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].correct,
                                   'green': clicked && mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].correct}"
                    >{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[1].text}}
            </button>

            <button id="2" :disabled="isDisabled" @click="clickAnswer(mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].correct)"
                    v-bind:class="{'red': clicked && !mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].correct,
                                   'green': clicked && mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].correct}"
                    >{{mathTables.questions[generatedQuestions[chosenQuestion]].responses[2].text}}
            </button>

            <button v-show="nextQ" @click="nextQuestion">NEXT QUESTION</button> <!--[next question button visas när "nextQ" värde är "true". Denna knappen gör "reset" på alla våran värde i data som hjälper oss att dela rätta svar från fel]-->

            <p v-show="showTotalTime">Your total time: {{totalTime}}</p>

        </div>
    </div>




</template>

<script>
    import json from "../assets/json/mathTables.json"
    export default {
        name: "gameComponent",
        props: {
            gamecode: Array,
            reset: Boolean
        },

        data() {
            return {
                //title: 'Mathtable One',
                mathTables: json,  // json file
                generatedQuestions:this.gamecode,
                //this.gamecode,
                chosenQuestion: 0, // index in our generated questions
                nextQ: false, //värde som visar "true" om vi är redo till nästa fråga.
                clicked: false, //boolean som visar om vi klickat på ett av svaren
                timePassed: 0,
                timeStarted: null, //todays date
                timer: null,
                showTotalTime: false,
                totalTime: "",
                showTimer: true,
                isDisabled: false
            }
        },

        //https://github.com/franktopel/vue-defuse/blob/master/src/components/VueDefuse.vue
        filters: {
            formatTimer(seconds) {
                let days, hrs, mins, secs, remainingSecs
                days = ('0' + Math.floor(seconds / (24 * 60 * 60))).substr(-2)
                remainingSecs = seconds - days * (24 * 60 * 60)
                hrs = ('0' + Math.floor(remainingSecs / (60 * 60))).substr(-2)
                remainingSecs = seconds - hrs * (60 * 60)
                mins = ('0' + Math.floor(remainingSecs / 60)).substr(-2)
                secs = ('0' + remainingSecs % 60).substr(-2)
                return (days !== '00' ? `${days}:${hrs}:${mins}:${secs}` : (hrs !== '00' ? `${hrs}:${mins}:${secs}` : (mins.charAt(0) !== '0' ? `${mins}:${secs}` : `${mins.charAt(1)}:${secs}`)))
                // use this if all you wanna see is seconds filled up with zeros
                // if (seconds.toString().length < 4) {
                //   return ('0000' + seconds).substr(-4)
                // } else {
                //   return seconds
                // }
            }
        },

        methods: {
            nextQuestion: function(){
                this.chosenQuestion ++ // vi går upp en index plats i "generatedQuestions"
                this.clicked = false //nollställer att vi har klickat på ett av svaren när nästa fråga visas
                this.nextQ = false;
                this.isDisabled = false
            },

            //när vi klickat på ett av svaren sätts clicked och nextQ till true
            clickAnswer: function(value){
                this.nextQ = true;
                // this.startTimer();
                this.clicked = true; //vi har klickat på ett av svaren
                //om vi är på sista frågan så sätts nextQuestion till false
                if(this.generatedQuestions.length > this.chosenQuestion+1){
                this.nextQ = true;  //vi kan visa nextQuestion-knappen för att gå vidare till nästa fråga
                }
                else{
                    //stoppar timer
                    this.stopTimer();
                    //formatterar antal sekunder till minuter och sekunder
                    this.formatTotalTime();
                    //döljer knappen nextQuestion
                    this.nextQ = false;
                    //döljer den stannade timern
                    this.showTimer = false;
                    //visar totala tiden
                    this.showTotalTime = true;
                    this.clicked = false;

                    //skicka tid till multiplay via emit till multiplay
                    this.$emit("totalTime", this.timePassed)
                }
                this.$emit('count', 1)
                if(value == true){
                    this.$emit('right', 1)
                }
                this.isDisabled = true
            },
            //startar timer, copy paste från https://github.com/franktopel/vue-defuse/blob/master/src/components/VueDefuse.vue
            startTimer () {
                if (!this.timer) {
                    this.timeStarted = Date.now()
                    this.timer = setInterval(() => {
                        this.timePassed = Math.round((Date.now() - this.timeStarted) / 1000)
                    }, 1000)
                }
            },

            //stoppar timer, copy paste från https://github.com/franktopel/vue-defuse/blob/master/src/components/VueDefuse.vue
            stopTimer () {
                clearInterval(this.timer)
                this.timer = null
            },

            formatTotalTime(){
                //räkna ut hur många minuter och sekunder timePassed är som i från början endast räknas i antal sekunder
                var minutes = Math.floor(this.timePassed / 60);
                var seconds = this.timePassed - minutes * 60;

                //formattera minutes och seconds till läsbart 00:00-format
                this.totalTime = ('0' + minutes).substr(-2)
                    + ":"
                    + ('0' + seconds).substr(-2);
            }

        },
        watch:{
            gamecode: function(){
                this.generatedQuestions = this.gamecode
            },
            reset: function(){
                if(this.reset == true){
                this.chosenQuestion = 0; // index in our generated questions
                    this.nextQ =false; //värde som visar "true" om vi är redo till nästa fråga.
                    this.clicked = false; //boolean som visar om vi klickat på ett av svaren
                    this.timePassed= 0;
                    this.timeStarted= null; //todays date
                    this.timer= null;
                    this.showTotalTime= false;
                    this.totalTime= "";
                    this.showTimer= true;
                    this.isDisabled= false;
                }
            }
        },
        mounted() {
            this.startTimer();
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
    .timer {
        font-size: 1.5em;
    }
</style>



