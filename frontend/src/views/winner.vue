<template>
    <div>
        <p> hej winner view</p>

        <p>{{room}}</p>
        <p>{{time}}</p>
        <p>{{nickname}}</p>
        <p>{{score}}</p>



    </div>
</template>

<script>

    export default {
        name: "winner"
    ,
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
    created() {
        this.nickname = this.$route.params.nickname;
        this.room = this.$route.params.room;
        this.score = this.$route.params.score;
        this.time = this.$route.params.time;

    },
        methods: {
            formatTotalTime(){
                //räkna ut hur många minuter och sekunder timePassed är som i från början endast räknas i antal sekunder
                var minutes = Math.floor(this.timePassed / 60);
                var seconds = this.timePassed - minutes * 60;

                //formattera minutes och seconds till läsbart 00:00-format
                this.totalTime = ('0' + minutes).substr(-2)
                    + ":"
                    + ('0' + seconds).substr(-2);
            }



        }
    }
</script>

<style scoped>

</style>