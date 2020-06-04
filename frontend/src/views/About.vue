<template>


  <div class="about">


  </div>

</template>





<script >

  import AboutComponent from "../components/aboutComponent";

  export default {
    name: "About",
    components: {
      AboutComponent,
    }
  }

</script>


<style scoped>

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