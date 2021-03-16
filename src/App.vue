<template>
<div id="app">

  <router-view />
  <!--
  <b-container class="bv-example-row" style="margin-top: 30px;">
    <b-row>
      <b-col>
        <h3 style="margin-left: 10px; text-align: left; color: white;">Tel. +82 10-9962-1729</h3>
        <h6 style="margin-left: 10px; text-align: left; color: white;">Instagram. @moel_paradoggs</h6>
      </b-col>
      <b-col col lg="3">
      </b-col>
    </b-row>
  </b-container>
-->
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: white;
}

#header1{
  position:fixed;
  display:block;
  width: 100%;
  z-index:9;
  padding: 0 0 0 0;
  top:0px;
}

</style>
