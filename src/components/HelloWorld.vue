<template>
<div class="hello">
  <div style="margin-bottom: 100px;">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h3 style="margin-left: 10px; text-align: left; color: white;">YSB Portfolio</h3>
          <h6 style="margin-left: 10px; text-align: left; color: white;">Web_MobileProgrammer</h6>
        </b-col>
        <b-col col lg="3">
          <b-button-group>
            <b-button variant="dark" style="color: white;">❤️</b-button>
          </b-button-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div style="position: relative; z-index: 2;">
    <div style=" color: #F2F2F2;">
      <h1>
        <router-link to="/hello2" style=" color: #F2F2F2;">Entrance</router-link>
      </h1>
    </div>
    <hr style="border: solid 10px red; margin-top: 80px;">
  </div>
  <div class="w-50 p-2 mb-1 bg-secondary text-light" style="position: relative; left:170px; top: -200px; z-index: 1;">
    <b-img src="https://c.pxhere.com/photos/a0/f2/signature_pen_writing_tool_office_stationery_marker_pen_coolie_business-651907.jpg!d" fluid alt="Fluid image"></b-img>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
