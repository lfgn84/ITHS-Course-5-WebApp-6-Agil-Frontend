<template>

    <div class="about">
        <head-component></head-component>
        <AboutComponent></AboutComponent>
        <footer-component></footer-component>

    </div>

</template>

<script >


    import AboutComponent from "../components/aboutComponent";
    import HeadComponent from "../components/headComponent";
    import FooterComponent from "../components/footerComponent";

    export default {
        name: "About",
        components: {
            FooterComponent,
            HeadComponent,
            AboutComponent
        }
    }

</script>


<style>


    .about{

        display:grid;

        grid-template-columns: repeat(1, auto);

        grid-template-rows: repeat(3, auto);

        justify-content: center;

        margin: 1em;

        padding: 0px 15px 0px 15px

    }



    .title {

        text-decoration: -moz-default-background-color;

        grid-row: 1;

        grid-column: 1;



    }



    .info{

        text-align: left;

        margin-top: 1vmax;

        white-space: pre-line;

    }

</style>






