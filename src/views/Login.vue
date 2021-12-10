<template>
  <div class="body">
    <b-card style="width: 600px;" class="cardsita">
      <b-card-header header-bg-variant="white">
        <h3>Login</h3>
      </b-card-header>
        <b-container>
          <form>
            <b-row class="pt-3">
              <label for="email">Email:</label>
              <b-input v-model="email"></b-input>
            </b-row>
            <b-row>
              <label for="password">Password:</label>
              <b-input v-model="password"></b-input>
            </b-row>
            <br>
            <br>
            <b-button @click.prevent="logIn()"> Log in</b-button>
          </form>
        </b-container>
    </b-card>
    <b-modal
      title="Error while logging"
      v-model="showErrorLogging"
      ok-only>
      <p class="my-4">Wrong ! Incorrect email or password</p>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  props: {},
  data () {
    return {
      email: '',
      password: '',
      showErrorLogging: false
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
      setLogIn: 'setLogIn'
    }),
    logIn () {
      this.setLogIn({
        email: this.email,
        password: this.password
      }).then((resolve) => {
        this.showErrorLogging = !resolve.success
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>
.body{
  background-color: rgb(108, 201, 245);
  position:absolute;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
</style>
