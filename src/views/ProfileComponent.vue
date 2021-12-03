<template>
  <b-container class="" fluid>
    <b-row class="">
      <b-col cols="12">
        <h1>Profile</h1>
        <b-row class="bg">
          <b-col cols="6">
            <div class="mb-2">
              <b-avatar
                rounded="lg"
                src="https://placekitten.com/300/300"
                size="10rem"
              ></b-avatar>
            </div>
          </b-col>
          <b-col cols="6">
            <label for="">Image</label>
            <b-form-file placeholder="Ingrese su imagen aca"></b-form-file>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <label for="">Name</label>
            <input class="form-control" type="text" />
          </b-col>
          <b-col cols="6">
            <label for="">Last Name </label>
            <input class="form-control" type="text" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <label for="">Email</label>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input id="" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-col>
          <b-col cols="6">
            <label for="">Phone </label>
            <input class="form-control" type="text" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <label for="">Role</label>
            <select
              class="form-control"
              disabled
              id="exampleFormControlSelect1"
            >
              <option>Admin</option>
              <option>Invitado</option>
              <option>Bla</option>
            </select>
          </b-col>
        </b-row>
        <b-row class="p-5">
          <b-col class="">
            <b-button size="lg" class="">Cancel</b-button>

            <b-button size="lg" class="mx-5">Save</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ProfileComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
