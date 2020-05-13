<template>
  <div class="home" id="home">
    <headComponent> </headComponent>

    <!-- Document Header Starts
    // HEAD (menu)
  -------------------------------------------------
    APPEN allt innehåll

    (if true)
    // Start sida       komponent

    (if true)
    // log in       komponent

    (if true)
    // single page        komponent

    (if true)
    // barn       komponent

    (if true)
    // lärare       komponent

    (if true)
    // game!           komponent

    -----------------------------------------------
    // footer komponent
    -->
    <startPage id="start"></startPage>
    <footerComponent></footerComponent>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import footerComponent from "../components/footerComponent";
import headComponent from "../components/headComponent";
import startPage from "../components/startPage";
export default {
  name: 'Home',
  components: {
    //HelloWorld
    footerComponent,
    headComponent,
    startPage
  }
}
</script>

<style>
  #home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 800px;
  }
  #start{
    padding: 120px 200px 200px 120px;
  }

</style>
