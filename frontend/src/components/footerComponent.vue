<template>


    <div class = footerComponent>
        <router-link to="/about">About</router-link>
        <p>Developed by MJLSR fall semester 2020 ITHS. School project in webb applications </p>

    </div>
</template>

<script>
    export default {
        name: "footerComponent"
    }
</script>

<style scoped>
    .footerComponent {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #f53b3b;
        color: white;
        text-align: center;
    }
</style>