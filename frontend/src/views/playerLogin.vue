<template>
    <div id="playerLogin">
        <div id="nav">
            <router-link to="/">Home</router-link>
        </div>
<div v-show="showSubmit">
        <p>Enter room code and a unique nickname</p>

        <!-- skriv in rumskod -->
        <!-- Göra om till form?-->
        <input type="text" placeholder="Enter room code" v-model="room" >
        <input type="text" placeholder="Enter nickname" v-model="nickname" >
        <button @click="submit()" >Submit</button>
</div>
        <p> {{responseText}} </p>

        <div v-if="loading" class="loading">
            Loading...
        </div>


        <div id="roomInfo" v-if="showRoomInfo">

            <p>Welcome to room {{room}} {{nickname}}</p>
            <p>You will answer {{gamecode.length}} questions</p>
            <router-link
                    :to="{name: 'multiPlay', params:{gc : gamecode, nickname : nickname, room : room} }" class="startButton" tag="button" > Start!
            </router-link>

        </div>


    </div>
</template>

<script>
    export default {
        name: "playerLogin",
        data() {
            return {
                room: "",
                nickname: "",
                gamecode: [],
                tempData: "",
                responseText: "",
                showRoomInfo: false,
                loading: false,
                showSubmit: true
            }
        },
        methods: {
            validNickname: function(){
               var value = false;

                if (/\s/.test(this.nickname)) {
                    this.responseText = "No spaces in your nickname please"
                } else if (!this.nickname) {
                    this.responseText = "You dont have a name?"
                }
                else{
                    value = true;
                    this.responseText = "";
                }
                return value
            },
            roomNotNull: function(){
               var value = false;
                if (!this.room){
                    this.responseText = "You need to name the room you want to join"
                }else{
                    value = true;
                    this.responseText = "";
                }
                return value;

            },
            submit: function () {

                if(this.validNickname() && this.roomNotNull()){
                    console.log(this.validNickname()  + " = validnickname & roomNotNull = " + this.roomNotNull())

                    this.responseText = "";
                    this.loading = true;
                    /*skapa spelare*/
                    fetch('https://fierce-mountain-27289.herokuapp.com/v2/createplayer', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({"room": this.room, "nickname": this.nickname}),

                    })
                        .then(response => {
                            response.json()
                            console.log("in response.json()");
                            console.log(response);
                            if(response.statusText == "Created"){
                                this.responseText = "Player with nickname " + this.nickname + " created.";
                                this.showSubmit = false;
                                this.loading = true;
                                this.showRoomInfo = true;
                            }
                            else if(response.statusText == "Method Not Allowed"){
                                this.responseText = "Nickname taken, choose another one";
                                this.showSubmit = true;
                                this.loading = false;

                            }
                            else if(response.statusText == "Not Found"){
                                this.responseText = "Room not found";
                                this.showSubmit = true;
                                this.loading = false;
                            }
                        })

                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }
                else{
                    console.log("in else row 107")
                    return false;
                }

                if(!this.showSubmit){
                    console.log("in if !this.showSubmit")
                    /*hämta spelkod*/
                    var url = new URL('https://fierce-mountain-27289.herokuapp.com/v1/room')
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
                            console.log('Success:', data);
                            this.tempData = data.gamecode;
                            this.gamecode = this.tempData.split(",");
                            this.gamecode.shift();
                            // shift removes first empty element in array, generated by split
                            this.showRoomInfo = true;
                            this.loading = false;
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                }
            }
        }
    }
</script>

<style scoped>
    #multiplayer{
        height: 1000px;
        background-repeat: no-repeat;
        background-image: url("../../public/kids.jpg");
        background-size: 100%;
    }
    button{
        cursor: pointer;

    }

</style>