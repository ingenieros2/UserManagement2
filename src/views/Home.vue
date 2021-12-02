<template>
  <div class="home">
    <h1>{{this.getUser}}</h1>
    <span class="material-icons">
favorite
</span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>
