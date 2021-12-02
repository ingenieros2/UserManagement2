<template>
  <b-container>
    <b-row>
      <b-col class="black">

  <div class="sidebar"
       data-background-color="black"
       data-active-color="succes">
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href="#" class="simple-text">
            <div class="logo-img">
                <img src="../assets/logo.png" alt="">
            </div>
          {{title}}
        </a>
      </div>
      <h1>hiiii</h1>
      <ul class="nav">
        <link to="/" name="Useres Profile" icon="ti-user"/>
        <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>
        <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>
      </ul>
    </div>
  </div>
  </b-col>
</b-row>
  </b-container>

</template>
<script>

export default {
  name: 'NavBarComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
