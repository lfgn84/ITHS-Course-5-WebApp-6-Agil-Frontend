<template>

       <div>
           <div id="router">
           <router-link to="/" >Home</router-link>
           </div>
    <div class="about">
        <head-component></head-component>
        <AboutComponent></AboutComponent>
        <footer-component></footer-component>

    </div>
       </div>
</template>

<script >


    import AboutComponent from "../components/aboutComponent";
    import HeadComponent from "../components/headComponent";


    export default {
        name: "About",
        components: {
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
    #router{
        font-family: 'Luckiest Guy', Tahoma;
        font-size: 20px;
    }



    .info{

        text-align: left;

        margin-top: 1vmax;

        white-space: pre-line;

    }

</style>






