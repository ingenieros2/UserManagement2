<template>
  <div id="app" fluid>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <b-container fluid>
      <b-row>
        <b-col class="bg-white pt-5" sm="3">
          <b-nav id="nav" vertical>
            <div class="pt-sm-10">
              <b-avatar
                class="pt-10"
                src="https://placekitten.com/300/300"
                size="6rem"
              ></b-avatar>
              <h5 class="pt-2">
                Marcos Cuchian
              </h5>
            </div>
            <router-link to="/profile" class="pt-3">Profile</router-link>
            <router-link to="/users" class="pt-3">Users</router-link>
            <router-link to="/roles" class="pt-3">Roles</router-link>
            <router-link to="/" class="pt-5">Log Out</router-link>
          </b-nav>
        </b-col>
        <b-col sm="8">
          <router-view class="pt-5"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'app',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e0e0e0;
}

#nav {
  height: 100vh;
}
.classNavbar {
  height: 1020px;
  background: #42b983;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #d30000;
}
</style>
