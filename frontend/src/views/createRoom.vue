<template>
    <div>
        <div class="header">
            <h1>Create Room</h1>
        </div>
        <div>
            <!-- välj level, döp rum, skicka till databas. -->
            <footerComponent></footerComponent>
            <div>

                <!-- infotext -->


                <ul class="floatLeft">
                    <li>
                        <p>Select number of questions:</p>
                    </li>
               <li>
                   <button @click="selectNumberOfQuestions(5)" v-bind:class="{green : selected3}" >5</button>
               </li>
                    <li>
                <button @click="selectNumberOfQuestions(10)" v-bind:class="{green : selected4}" >10</button>
                    </li>
                    <li>
                <button @click="selectNumberOfQuestions(15)" v-bind:class="{green : selected5}" >15</button>
                    </li>
                </ul>

                <!-- välj level och spara i variabel för att kunna skicka-->
                <ul class="floatLeft">
                    <li>
                        <p>Select level:</p>
                    </li>
                    <li>
                <button @click="selectLevel(1)" v-bind:class="{green : selected0}"> Easy </button>
                    </li>
                    <li>
                <button @click="selectLevel(2)" v-bind:class="{green : selected1}"> Medium </button>
                    </li>
                    <li>
                <button @click="selectLevel(3)" v-bind:class="{green : selected2}"> Hard </button>
                    </li>
                    <li>
                <input  type="text" v-model="info.room" placeholder="name your room to something">

                <!--döp rum inga mellanslag! spara för att kunna skicka-->
                <!-- submit-knapp som skickar till databasen-->
                <button @click="sendInfo">create room!</button>
                        <p>Please make sure your room name does not contain spaces.</p>
                    </li>
                </ul>
                <p>{{responseText}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'
    import footerComponent from "../components/footerComponent";
    // import startPage from "../components/startPage";
    export default {
        name: 'createRoom',
        components: {
            //HelloWorld
            footerComponent
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
    .green
    {
        background-color: green;
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

    .floatLeft {
        float: left;
    }
</style>