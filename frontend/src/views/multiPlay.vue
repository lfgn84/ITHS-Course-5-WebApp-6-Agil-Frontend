<template>
   <div id="multiplay">
       <div v-show="questionsLeft < 1" id="nav" v-bind:style="'font-size: 32px'">
           <router-link to="/">Home</router-link>
       </div>
    <!-- totalTime, count och right skickas från gamecomponent via emit-->
    <game-component :gamecode="gamecode" :level="userLevel" @totalTime="setTime" @count="counter" @right="ratt" v-show="play"></game-component>
       <div id ="score" v-bind:style="'background-color: yellow'">
       Questions answered: {{x}}
           <div class="divider"/>
       Questions left: {{questionsLeft}}
           <div class="divider"/>
       Score : {{score}}
       </div>


      <div v-show="questionsLeft < 1" @click="submitInfo">
            <router-link
               :to="{name: 'winner', params:{nickname: nickname, room : room, score : score, time: time} }"
               tag="button" > Show results
            </router-link>
      </div>

   </div>


</template>

<script>
    import gameComponent from "../components/gameComponent";
    export default {
        name: "multiPlay",
        props:{
            passedCodes: Array,
        },
        components: {gameComponent},
        data() {
            return {
                userLevel: "",
                play: true,
                gamecode: [],
                x: 0,
                score:0,
                nickname: "",
                room: "",
                time: 0
            }
        },
        methods:{
            counter: function(value){
                this.x += value
            },
            ratt: function(value){
                this.score += value
            },
            setTime: function (value) {
                this.time = value;
            },
            submitInfo: function(){
                //skickar spelarens resultat till databasen
                fetch('https://fierce-mountain-27289.herokuapp.com/v1/playerresult',{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "room":this.room,
                        "nickname":this.nickname,
                        "correctanswers": this.score,
                        "totaltime": this.time
                    }),

                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }

        },
        computed:{
            questionsLeft: function(){
                return this.gamecode.length - this.x
            }
        },
        created() {
            this.gamecode = this.$route.params.gc;
            this.nickname = this.$route.params.nickname;
            this.room = this.$route.params.room;
        }
    }

</script>

<style scoped>
#multiplay{
    background-image: url("../../public/numbers.jpg");
    height: 900px;
    background-repeat: no-repeat;
    background-size: 100%;
    font-family: 'Luckiest Guy', Tahoma;
}
.divider{
    width:100px;
    height:auto;
    display:inline-block;
}
#score{
    font-size: 38px;
    color: black;
}
</style>