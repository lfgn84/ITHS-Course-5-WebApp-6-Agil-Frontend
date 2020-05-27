<template>
   <div>

    <game-component :gamecode="hej" :level="userLevel" @count="counter" @right="ratt" v-show="play"></game-component>
       Questions answered: {{x}}
       Questions left: {{questionsLeft}}
      Score : {{score}}
   </div>
</template>

<script>
    import gameComponent from "../components/gameComponent";
    export default {
        name: "multiPlay",
        props:{
            passedCodes: Array
        },
        components: {gameComponent},
        data() {
            return {
                userLevel: "",
                play: true,
                hej: [],
                x: 0,
                score:0
            }
        },
        methods:{
            counter: function(value){
                this.x += value
            },
            ratt: function(value){
                this.score += value
            }
        },
        computed:{
            questionsLeft: function(){
                return this.hej.length - this.x
            }
        },
        created() {
            this.hej = this.$route.params.gc;
        }
    }

</script>

<style scoped>

</style>