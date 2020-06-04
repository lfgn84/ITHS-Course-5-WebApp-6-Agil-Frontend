<template>

    <div class="header1">
        <nav class="nav">
            <router-link to="/">Home</router-link>
        </nav>

        <h1>To create a room please choose number of questions and level</h1>

        <div>

            <div class="body">


                <div>
                    <!-- välj level, döp rum, skicka till databas. -->

                    <div>

                        <!-- infotext -->



                        <div class="q2">
                            <p>Select number of questions:</p>


                                <button @click="selectNumberOfQuestions(5)" v-bind:class="{green : selected3}" >5</button>


                                <button @click="selectNumberOfQuestions(10)" v-bind:class="{green : selected4}" >10</button>


                                <button @click="selectNumberOfQuestions(15)" v-bind:class="{green : selected5}" >15</button>





                            <!-- välj level och spara i variabel för att kunna skicka-->





                                <p>Select level:</p>
                                <button @click="selectLevel(1)" v-bind:class="{green : selected0}"> Easy </button>


                                <button @click="selectLevel(2)" v-bind:class="{green : selected1}"> Medium </button>


                                <button @click="selectLevel(3)" v-bind:class="{green : selected2}"> Hard </button>


                        </div>
                        <div class="input1">
                            <input  type="text" v-model="info.room" placeholder="Name your room here">

                            <!--döp rum inga mellanslag! spara för att kunna skicka-->
                            <!-- submit-knapp som skickar till databasen-->
                            <button @click="sendInfo">create room!</button>

                        </div>

                        <div class="text1">
                            <p>{{responseText}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'createRoom',
        components: {

        },
        data(){
            return{
                info:{
                    room: "",
                    gamecode: ""
                },
                selected0: false,
                selected1: false,
                selected2: false,
                selected3: false,
                selected4: false,
                selected5: false,
                responseText: "",
                selectedNumberOfQuestions: 10,
                active: false
            }
        },
        methods: {
            selectLevel: function(inputz){
                if(this.active == false){
                    this.responseText = "Please select how many questions you want."
                }

                switch(inputz) {
                    case 1:
                        this.selected0 = true;
                        this.selected1 = false;
                        this.selected2 = false;
                        break;
                    case 2:
                        this.selected1 = true;
                        this.selected0 = false;
                        this.selected2 = false;
                        break;
                    case 3:
                        this.selected2 = true;
                        this.selected0 = false;
                        this.selected1 = false;
                        break;
                }

                var level = inputz;
                var gameCodeText= "";
                var gameCodeArray = [9999];
                var numberOfQuestions = this.selectedNumberOfQuestions;
                var i = 0;
                while (i < numberOfQuestions) {                                  // 10 = antalet frågor som skall spelas
                    var x = 0;
                    switch(level) {
                        case 1:
                            x =  Math.floor((Math.random() * 30) + 1);
                            break;
                        case 2:
                            x =  Math.floor((Math.random() * 30) + 31);
                            break;
                        case 3:
                            x =  Math.floor((Math.random() * 39) + 61);
                            break;
                    }
                    if (!gameCodeArray.includes(x)) {
                        if (gameCodeArray[0] == 9999) {
                            gameCodeArray.shift()
                        }
                        gameCodeArray.push(x)
                        i++;
                    }
                }
                for (const element of gameCodeArray) {
                    gameCodeText = gameCodeText + "," + element;
                }
                console.log(gameCodeText);
                this.info.gamecode = gameCodeText;
            },
            sendInfo: function(){

                var room = this.info.room;
                var gamecode = this.info.gamecode;

                /* check if roomcode contqains any whitespaces*/
                if(/\s/.test(room)){
                    console.log(room + " room in check whitespaces")
                    this.responseText = "No spaces in room name please!"
                }

                /*check if room is null*/
                else if (!room){
                    this.responseText = "You need to name the room"
                }

                /*check if a level has been selected*/
                else if(gamecode == ""){
                    this.responseText = "please select level"
                }

                /*if all checks above passes, send info to database*/
                else{

                    console.log(room + " = room in else not white space")

                    this.responseText = "Room created with name " + room + ". Everything is set to play hungry for math!" ;

                    fetch('https://fierce-mountain-27289.herokuapp.com/v1/creategame',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({"room":room, "gamecode":gamecode}),
                        // info är ett element som vi postar body
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    console.log( JSON.stringify({"room":room, "gamecode":gamecode}))
                }
            },
            selectNumberOfQuestions: function(n){
                this.active = true;
                this.selectedNumberOfQuestions = n;

                switch(n) {
                    case 5:
                        this.selected3 = true;
                        this.selected4 = false;
                        this.selected5 = false;
                        break;
                    case 10:
                        this.selected3 = false;
                        this.selected4 = true;
                        this.selected5 = false;
                        break;
                    case 15:
                        this.selected3 = false;
                        this.selected4 = false;
                        this.selected5 = true;
                        break;
                }

            }

        }
    }
</script>
<style>

    .header1{
        font-family: 'Luckiest Guy', Tahoma;
        text-align: center;
        position: fixed;
        background-color: #87d8ff;
        width: 100%;
        color: #480080;
        line-height:1.42857143;
        min-width:500px;
        font-size: 20px;
    }

    .body{
        padding: 345px;
        background: lightblue url("../../public/login1.png");
        width: 64%;
    }


    .button1{
        height: 100px;
        width: 0px;
        margin-left: 400px;

        background-color: #93D2FA;
        border-bottom-color: #44a0ad;
        font-family: 'Luckiest Guy', Tahoma;
        color: #480080;
        font-size: 10px;


        cursor: pointer;
    }

    .button2{
        height: 60px;
        width: 200px;
        margin-left: 400px;
        margin-top: 250px;
        background-color: #93D2FA;
        border-bottom-color: #44a0ad;
        font-family: 'Luckiest Guy', Tahoma;
        color: #480080;
        font-size: 10px;
        display: ruby-base;
        position: relative;
        cursor: pointer;
    }

    .q2{
        font-size: 75%;
        margin-top: -370px;
        color: #480080;


    }
    .input1{
        display: -webkit-box;
        margin-top: 10px;
        padding: 5px 30px 50px 350px;



    }

    .text1{
        color: #f6faee;
        background-color: #480080;
    }

    .green
    {
        background-color: green;
    }

</style>