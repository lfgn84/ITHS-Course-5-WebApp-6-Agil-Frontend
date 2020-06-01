<template>

    <div class = "body">

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

            <li class="login">
                <router-link
                        to="/logIn" class="startButton" tag="button"> Login
                </router-link>
            </li>

        </ul>
        <p class="counter"> Total visitors: {{numberOfVisitors}} </p>
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

    p {
        padding-top: 20px;
        width: 1400px;
        text-align: -moz-center;
        margin-bottom: -20px;
        font-family: 'Luckiest Guy', Tahoma;
        font-size: 4em;
        color: #fffefd;
    }


    ul {
        display: inline-flex;
        list-style-type: none;
    }

    li {
        margin: 100px 150px 150px 150px;
    }

    .startButton {
        height: 150px;
        width: 150px;
        background-color: #93D2FA;
        border-bottom-color: #44a0ad;
        font-family: 'Luckiest Guy', Tahoma;
        color: #480080;
        font-size: 30px;
        display: block;
        position: relative;
        cursor: pointer;
    }

    .counter {
        font-size: 30px;
        color: #480080;
    }

    .body {
        padding: 150px;
        background: lightblue url("../../public/hungryForMath.bmp.png");
        background-clip: padding-box;
        width: 155%;
    }

</style>