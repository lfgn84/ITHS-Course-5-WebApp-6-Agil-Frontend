<template>
    <div id ="winner">
        <p> winner view</p>

        <div>
            <p>Your result:</p>
            <p>Score: {{score}}</p>
            <p>Total time: {{time}}</p>
        </div>

        <div v-show="loading" class="loading">
            <p>{{loadingText}}</p>
        </div>

        <div v-show="showResult">

            <table style="width:50%">
                <tr>
                    <th>Ranking</th>
                    <th>Nickname</th>
                    <th>Score</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{{playerArray[0].nickname}}</td>
                    <td>{{playerArray[0].correctanswers}}</td>
                    <td>{{formatTime(playerArray[0].totaltime)}}</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>{{playerArray[1].nickname}}</td>
                    <td>{{playerArray[1].correctanswers}}</td>
                    <td>{{formatTime(playerArray[1].totaltime)}}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{playerArray[2].nickname}}</td>
                    <td>{{playerArray[2].correctanswers}}</td>
                    <td>{{formatTime(playerArray[2].totaltime)}}</td>
                </tr>
            </table>

        </div>

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
                score: 0,
                nickname: "",
                room: "",
                time: 0,
                loading: true,
                playerArray: [],
                showResult: false,
                checkMinusOne: -1,
                loadingText: "Getting the result from all players. . ."
            }
        },
        created() {
            //hämta värden från multiplay
            this.nickname = this.$route.params.nickname;
            this.room = this.$route.params.room;
            this.score = this.$route.params.score;
            //time formatteras till 00:00-format
            this.time = this.formatTime(this.$route.params.time);

        },
        mounted: function () {
            this.getAllTheResults();
        },
        methods: {
            formatTime(timeValue) {
                //räkna ut hur många minuter och sekunder timePassed är som i från början endast räknas i antal sekunder
                var minutes = Math.floor(timeValue / 60);
                var seconds = timeValue - minutes * 60;

                //formattera minutes och seconds till läsbart 00:00-format
                timeValue = ('0' + minutes).substr(-2) +
                            ":" +
                             ('0' + seconds).substr(-2);

                return timeValue;
            }
            ,


            //Fetchar allas resultat från databas tills dess att ingen har "-1" på poäng i listan.
            //(Borde ändras till not null istället för -1?)
            getAllTheResults(){
                var url = new URL('https://fierce-mountain-27289.herokuapp.com/v1/winner')
                var params = {room: this.room}
                url.search = new URLSearchParams(params).toString()

                console.log("we are in get all the results!")

                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.playerArray = data.results;
                        //checkar om listans sista plats correctanswers = -1
                        if(this.playerArray[this.playerArray.length-1].correctanswers == -1){
                            //om det är någon som inte spelat klart anropar metoden sig själv igen och gör samma fetch
                            this.getAllTheResults();
                            //lägger till en punkt på "Loading" så det händer nåt på sidan medan den laddas
                            this.loadingText+= " .";
                            console.log("inside if")
                            console.log(this.playerArray[this.playerArray.length-1].correctanswers)
                        }
                        else{
                            //när alla har spelat klart döljs loading-diven och resultat-listan visas
                            this.loading = false;
                            this.showResult = true;
                            console.log("inside else")
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            }
        }

    }
</script>

<style scoped>
#winner{
    background-image: url("../../public/all-winners.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 1200px;
    font-family: 'Luckiest Guy', Tahoma;
    font-size: 40px;
    color: ivory;
}
</style>