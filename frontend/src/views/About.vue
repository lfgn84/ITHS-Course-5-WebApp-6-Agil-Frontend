<template>


  <div class="about">
      <div id="nav">
      <router-link to="/">Home</router-link>
      </div>

    <div class="title">About us who developed this quiz for learning and education</div>

    <div class="info">

      <li>This is a school project that covers Webapplictions and Agile Methods.</li><br><br>


      This project focuses on SCRUM, Vue.cli, node.js with an postgress database.<br><br>

      Team-members (link to Github):

<br>

      <div><a href="https://github.com/lfgn84" target="_blank">Luis Guiteraez</a></div>

      <div><a href="https://github.com/SebastianWaltilla" target="_blank">Sebastian Waltilla</a></div>

      <div><a href="https://github.com/bigJohanna" target="_blank">Johanna Svallingson</a></div>

      <div><a href="https://github.com/mansfritzner" target="_blank">Måns Fritzner</a></div>

      <div><a href="https://github.com/RaufRajput" target="_blank">Rauf Rajput</a></div>


    </div>

  </div>

</template>





<script >

  export default {
    name: "About",
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