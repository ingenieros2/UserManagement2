<template>
  <div class="home">
    <ProfileComponent></ProfileComponent>
  </div>
</template>

<script>
import ProfileComponent from '../components/ProfileComponent'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    ProfileComponent
  }
}
</script>
