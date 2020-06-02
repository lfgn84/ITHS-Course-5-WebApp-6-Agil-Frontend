<template>
    <div class="headerLg">
        <nav class="nav">
            <router-link to="/">Home</router-link>
        </nav>

        <h1>Please enter your username and password to login</h1>


<div>


    <div class="body">
    <div>
        <input class="p1" type="text" v-model="username1" placeholder="Enter username">
        <input class="p2" type="text" v-model="password1" placeholder="Enter password">
        <button class="button" @click="checkInput"> Login </button>
        <p class="p3"> {{ errorMessage}}</p>
     </div>
       </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "logIn",
        data(){
            return{
                username: "admin",
                password: "1234",
                password1: "",
                username1: "",
                errorMessage: ""
            }
        },
        methods:{
            checkInput:function(){

                if(this.username == this.username1 && this.password == this.password1){
                    this.$router.push({ name: 'createRoom' });
                }
                this.errorMessage = "Incorrect username or password: please try again "
            }
        }
    }
</script>


<style scoped>

    .body {
        padding: 250px;
        background : lightblue url("../../public/login1.png");
        width: 70%;
    }

.p1 {
    width: 20%;
    margin: 50px 0;
    margin-top: -150px;
    padding: 5px 3px 5px 8px;
    display: -webkit-flex;
    border-radius: 4px;
    }

.p2{
    width: 20%;
    padding: 5px 3px 5px 8px;
    display: -webkit-flex;
    border-radius: 4px;
}
.p3{
    font-family: 'Luckiest Guy', Tahoma;
    font-size: 30px;
    background-color: #2e3af5;
    color: #f6faee;
    margin-top: 120px;
}

    .button{
        height: 60px;
        width: 200px;
        margin-left: -900px;
        margin-top: 25px;
        background-color: #93D2FA;
        border-bottom-color: #44a0ad;
        font-family: 'Luckiest Guy', Tahoma;
        color: #480080;
        font-size: 30px;
        display: ruby-base;
        position: relative;
        cursor: pointer;
    }

    .headerLg{
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

</style>