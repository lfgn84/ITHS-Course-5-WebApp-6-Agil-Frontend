<template>
  <div class="home" id="home">
    <headComponent> </headComponent>

    <startPage id="start"></startPage>
    <footerComponent></footerComponent>

  </div>
</template>

<script>
import footerComponent from "../components/footerComponent";
import headComponent from "../components/headComponent";
import startPage from "../components/startPage";
export default {
  name: 'Home',
  components: {
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
