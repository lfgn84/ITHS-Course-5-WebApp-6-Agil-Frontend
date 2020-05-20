<template>
    <div>
        <div class="header">
            <h1>Create Room</h1>
        </div>
        <div>
            <!-- välj level, döp rum, skicka till databas. -->
            <footerComponent></footerComponent>
            <div>
                <p>Hej, välj nivå och döp rummet.</p>
                <!-- infotext -->
                <!-- välj level och spara i variabel för att kunna skicka-->
                <button @click="selectLevel(1)" v-bind:class="{green : correct0}"> 1 </button>
                <button @click="selectLevel(2)" v-bind:class="{green : correct1}"> 2 </button>
                <button @click="selectLevel(3)" v-bind:class="{green : correct2}"> 3 </button>
                <input  type="text" v-model="info.room" placeholder="enter room code">
                <!--döp rum inga mellanslag! spara för att kunna skicka-->
                <!-- submit-knapp som skickar till databasen-->
                <button @click="sendInfo">skapa rum!</button>
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
                    gamecode: "12, 13, 14"
                },
                correct0: null,
                correct1: null,
                correct2: null,
                responseText: "innan knapptryck"
            }
        },
        methods: {
            selectLevel: function(inputz){
                if(inputz == 1)
                    this.correct0 = true;
                if(inputz == 2)
                    this.correct1 = true;
                if(inputz == 3)
                    this.correct2 = true;
                var level = inputz;
                var gameCodeText= "";
                var gameCodeArray = [9999];
                var numberOfQuestions = 30;
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
                console.log(this.info + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                var room = this.info.room;
                var gamecode = this.info.gamecode;
                this.responseText = "Success";
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
</style>