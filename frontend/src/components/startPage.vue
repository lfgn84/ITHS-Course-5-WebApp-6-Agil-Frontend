<template>
    <div class = "frame">


        <p> info how to play </p>
        <ul>
            <li>
                <router-link
                        to="/singlePlay" class="startButton" tag="button"> Single play
                </router-link>
            </li>
            <li>

                <router-link
                        to="/multiPlayer" class="startButton" tag="button"> Join multiplayer game
                </router-link>

            </li>

            <li>
                <router-link
                        to="/logIn" class="startButton" tag="button"> Login
                </router-link> </li>

        </ul>

        <p class="counter"> Total no visitors: {{numberOfVisitors}}</p>

    </div>
</template>

<script>
    export default {
        name: "startPage",
        data(){
            return{
                inputRoom: "",
                numberOfVisitors: 0
            }
        },
        methods: {
            pingDatabase: function () {
                fetch("https://fierce-mountain-27289.herokuapp.com/v1/ping", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.numberOfVisitors = data.counter;
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            },
        },
        mounted() {
            this.pingDatabase();
        }

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');
    p{
        padding-top: 20px;
        width: 1400px;
        text-align: -moz-center;
        margin-bottom: -20px;
        font-family: 'Luckiest Guy', Tahoma;
        font-size:4em;
        color: #f53b3b;
    }
    ul{
        display: inline-flex;
        list-style-type: none;
    }
    li{
        margin: 100px 150px 150px 150px;
    }
    .startButton{
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
    .counter{
        font-size: 16px;
        color: #2c3e50;
    }

</style>