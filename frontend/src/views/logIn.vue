<template>
    <div>

        <div id="nav">
            <router-link to="/">Home</router-link>
        </div>
        <p>Username</p>
        <input type="text" v-model="username1" placeholder="Enter username">
        <p>Password</p>
        <input type="text" v-model="password1" placeholder="enter password">
        <button @click="checkInput"> Enter </button>
        <p> {{ errorMessage}}</p>
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
                this.errorMessage = "password is 1234 and username is spelled admin :D "
            }
        }
    }
</script>


<style scoped>

</style>