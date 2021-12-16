<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3">
        <div class="pt-sm-10">
          <b-avatar
            class="pt-10"
            src="https://placekitten.com/300/300"
            size="6rem"
          ></b-avatar>

          <h1 class="text-white">
            {{ nameProfile }}
          </h1>
        </div>
        <b-nav vertical>
          <b-nav-item to="/"> Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-nav>
      </b-col>
      <b-col class="">
        <Profiles></Profiles>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Profiles from './Profiles'
export default {
  components: { Profiles },
  name: 'NavBar',
  props: {
    msg: String
  },
  data () {
    return {
      nameProfile: 'marcos'
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
}
.b-sidebar-header {
  display: none !important;
  visibility: inherit;
}
</style>
