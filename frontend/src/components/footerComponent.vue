<template>


    <div class = footerComponent>
        <router-link to="/about">About</router-link>
        <p>Developed by MJLSR fall semester 2020 ITHS. School project in web applications </p>

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
        bottom: -10px;
        width: 100%;

        color: #000000;
        text-align: center;
    }

</style>