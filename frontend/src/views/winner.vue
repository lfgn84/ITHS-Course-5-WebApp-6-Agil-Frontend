<template>
    <div>
        <p> winner view</p>

        <div>
            <p>Your result:</p>
            <p>Score: {{score}}</p>
            <p>Total time: {{time}}</p>
        </div>

        <div v-show="loading" class="loading">
            Loading results from all players...
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
                    <td>{{playerArray[0].totaltime}}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{{playerArray[1].nickname}}</td>
                    <td>{{playerArray[1].correctanswers}}</td>
                    <td>{{playerArray[1].totaltime}}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{playerArray[2].nickname}}</td>
                    <td>{{playerArray[2].correctanswers}}</td>
                    <td>{{playerArray[2].totaltime}}</td>
                </tr>
            </table>

        </div>

        <button @click="test"></button>

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
                checkMinusOne: -1
            }
        },
        created() {
            //hämta värden från multiplay
            this.nickname = this.$route.params.nickname;
            this.room = this.$route.params.room;
            this.score = this.$route.params.score;
            this.time = this.$route.params.time;
        },
        mounted: function () {
            this.getAllTheResults();
        },
        methods: {
            formatTotalTime() {
                //räkna ut hur många minuter och sekunder timePassed är som i från början endast räknas i antal sekunder
                var minutes = Math.floor(this.timePassed / 60);
                var seconds = this.timePassed - minutes * 60;

                //formattera minutes och seconds till läsbart 00:00-format
                this.totalTime = ('0' + minutes).substr(-2)
                    + ":"
                    + ('0' + seconds).substr(-2);
            }
            ,
            /*
            checkWinners() {
                var url = new URL('https://fierce-mountain-27289.herokuapp.com/v1/winner')
                var params = {room: this.room}
                url.search = new URLSearchParams(params).toString()


                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.playerArray = data.results
                        this.loading = true;
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

                this.loading = false;

            },*/

            //ersätter checkwinners och checkIfFinsihed..
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
                        if(this.playerArray[this.playerArray.length-1].correctanswers == -1){
                            this.getAllTheResults();
                            console.log("inside if")
                            console.log(this.playerArray[this.playerArray.length-1].correctanswers)
                        }
                        else{
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

            /*checkIfFinished(){
                    console.log("chek")
                    this.showResult = true;


                    do {
                        // loop för att se när check minus inte blir minus -1
                        var url = new URL('https://fierce-mountain-27289.herokuapp.com/v1/checkdone')
                        var params = {room: this.room}
                        url.search = new URLSearchParams(params).toString()


                        fetch(url, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                this.checkMinusOne = data
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                        console.log(this.checkMinusOne)
                    }
                    while (this.checkMinusOne === -1)
                    {
                        // loop slut
                        this.checkWinners()
                    }

            }*/

    }
</script>

<style scoped>

</style>