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
                <button @click="selectLevel(1)">1</button>
                <button @click="selectLevel(2)">2</button>
                <button @click="selectLevel(3)">3</button>
                <input type="text">
                <!--döp rum inga mellanslag! spara för att kunna skicka-->
                <!-- submit-knapp som skickar till databasen-->
                <button @click="sendInfo">skapa rum!</button>
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
                    room: "Luis-room",
                    gamecode: "12, 13, 14"
                }
            }
        },
        methods: {
            selectLevel: function(){
                /* beroende på vilken level : generera gameCode? */
                this.info.gamecode = [12, 13, 4, 1]
            },
            nameRoom: function(){
                /* sätt roomName-variabel */
                this.info.room= "hajen"
            },
            sendInfo: function(){
                console.log(this.info + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                var room = this.info.room;
                var gamecode = this.info.gamecode;
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
    .header {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 800px;
    }
</style>