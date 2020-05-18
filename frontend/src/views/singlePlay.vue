<template>

    <div id="singlePlay">
        <h1>Math</h1>
        <router-link to="../components/stageOne.vue" class="playStageOne" tag="button"> Play StageOne router</router-link>
        <button v-on:click="showstageone"> Play StageOne </button>

        <button v-on:click="stageTwo"> Play StageTwo </button>

        <button v-on:click="stageThree"> Play StageThree </button>

    </div>


</template>

<script>
    import stageOne from '../components/stageOne.vue'

    export default {
        name: "singlePlay",
        components: stageOne,
        data() {
            return {
                showS1: false,
            }
        },
        methods:{
            showstageone: function(){
                this.showS1= true
            }

        }
    }

</script>

<style scoped>

</style>