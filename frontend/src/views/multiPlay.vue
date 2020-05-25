<template>
   <div>

    <game-component :gamecode="hej" :level="userLevel" v-show="play"></game-component>
   </div>
</template>

<script>
    import gameComponent from "../components/gameComponent";
    export default {
        name: "multiPlay",
        props:{
            passedCodes: Array
        },
        components: {gameComponent},
        data() {
            return {
                userLevel: "",
                play: true,
                hej: []
            }
        },
        created() {
            this.hej = this.$route.params.gc;
        }
    }

</script>

<style scoped>

</style>