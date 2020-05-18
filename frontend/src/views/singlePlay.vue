<template>

    <div id="Math">
        <h1>Math</h1>
        <button v-on:click="showstageone"> Play StageOne </button>

        <button v-on:click="stageTwo"> Play StageTwo </button>

        <button v-on:click="stageThree"> Play StageThree </button>
<stage-one v-show="showS1"></stage-one>
    </div>


</template>

<script>
    import stageOne from '../components/stageOne.vue'

    export default {
        name: "stageOne",
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