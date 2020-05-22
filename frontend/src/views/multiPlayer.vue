<template>
   <div>
    <p>This is the multiplayer page</p>
    <p>Welcome to room {{room}}</p>
    <p>You will answer NN questions of level Y</p>
    <button>start</button>
   </div>
</template>

<script>

    export default {
        name: "multiplayer",
        data() {
            return{
                room: "annikasspel1"
            }
            },
        created() {
            this.room = this.$route.params.room;
        }
    }
</script>

<style scoped>

</style>