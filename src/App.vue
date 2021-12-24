<template>
  <b-container id="app" fluid>
    <b-row v-if="this.getIsLogged">
      <b-col class="bg-white pt-5" sm="3" fluid>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
        <b-nav id="nav" vertical>
          <div class="pt-sm-10">
            <b-avatar
              class="pt-10"
              src="https://placekitten.com/300/300"
              size="6rem"
            ></b-avatar>
            <h5 class="pt-2">Marcos Cuchian</h5>
          </div>
          <div
            class="d-flex flex-column bd-highlight mb-3 justify-content-between"
            v-for="link in listLinks" :key="link.to"
          >
            <router-link to="link.to" class="pt-3">
              <span class="material-icons">{{link.icon}}</span>
              {{link.name}}</router-link
            >
          </div>
        </b-nav>
      </b-col>
      <b-col sm="8">
        <router-view class="pt-5" />
      </b-col>
    </b-row>
  <div v-else >
      <Login />
  </div>
  </b-container>
</template>
<script>
// @ is an alias to /src
import mapGetters from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      listLinks: [
        { to: '/profile', icon: 'person', name: 'Profile' },
        { to: '/users', icon: 'people', name: 'Users' },
        { to: '/roles', icon: 'sell', name: 'Roles' },
        { to: '/', icon: 'logout', name: 'Log Out' }
      ]
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      getIsLogged: 'getIsLogged'
    })
  }
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
  color: #000000;
  background: #ffffff;
  font-size: 20px;
}
#nav a {
  padding-top: 40px !important;
  background: #ffffff;
  font-size: 20px;
}
</style>
