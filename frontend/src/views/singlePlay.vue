<template>
    <div>
    {{mathTables}}
    </div>
</template>

<script>
    import json from '../assets/json/mathTables'
    export default {
        name: "singlePlay",
        data(){
            return{
                mathTables:json
            }
        }
}
</script>

<style scoped>

</style>