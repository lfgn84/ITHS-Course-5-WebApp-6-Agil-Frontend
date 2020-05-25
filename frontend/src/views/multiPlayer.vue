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
                room: "allasrum"
            }
            }
    }
</script>

<style scoped>

</style>