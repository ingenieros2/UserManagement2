<template>
  <b-container>
    <b-row class="title-module">
      <b-col sm="1">
        <h1>Users</h1>
      </b-col>
      <b-col sm="8"></b-col>
      <b-col sm="3">
        <b-button v-b-modal.modal-2 @click="modalNewUser">New user</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="3" class="filter-wrapper">
        <b-row class="title-wrapper">
          <h3>Filters</h3>
        </b-row>
        <b-row class="name-wrapper">
          <label for="name">Name</label>
          <b-input></b-input>
        </b-row>
        <b-row class="email-wrapper">
          <label for="email">Email</label>
          <b-input></b-input>
        </b-row>
        <b-row class="role-wrapper">
          <label for="role">Role</label>
          <b-select></b-select>
        </b-row>
      </b-col>
      <b-col sm="9">
        <b-table striped hover :items="items" :fields="fields">
          <template #cell(Acciones)="data">
            <b-row>
              <b-col cols="4"></b-col>
              <b-col cols="2">
                <a v-b-modal.modal-2 @click="modalEditing">
                  <span class="material-icons">edit</span>
                </a>
              </b-col>
              <b-col cols="2">
                <a @click="deleteUser(data.item)">
                  <span class="material-icons">delete</span>
                </a>
              </b-col>
            </b-row>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-modal id="modal-2" :title=modalTitle @ok="editing ? modify() : newUser()" @cancel="cancelEditing">
        <form>
          <b-row>
          <b-col sm="6">
            <label for="nameNewUser">Name:</label>
            <b-input v-model="name"></b-input>
            <label for="emailNewUser">Email:</label>
            <b-input v-model="email"></b-input>
            <label for="roleNewUser">Role:</label>
            <b-select v-model="role"></b-select>
          </b-col>
          <b-col sm="6">
            <label for="lastNameNewUser">Last Name:</label>
            <b-input v-model="lastName"></b-input>
            <label for="phoneNewUser">Phone:</label>
            <b-input v-model="phone"></b-input>
            <label for="imageNewUser">Image:</label>
            <b-input v-model="image"></b-input>
          </b-col>
          </b-row>
        </form>
        <template #modal-footer="{ ok, cancel }">
          <b-button size="sm" variant="success" @click="ok()">
            Save
          </b-button>
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
        </template>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: 'Users',
  props: { },
  components: {},
  data () {
    return {
      items: [{ Id: 1, Name: 'Nacho', LastName: 'Heinzmann', Email: 'ignacio.heinzmann@gmail.com', Phone: '3516273746', RoleId: 1 }],
      fields: ['Id', 'Name', 'LastName', 'Email', 'Phone', 'RoleId', 'Acciones'],
      name: '',
      lastName: '',
      email: '',
      phone: '',
      roleId: 0,
      image: '',
      editing: false
    }
  },
  computed: {
    modalTitle () {
      return this.editing ? 'Editing' : 'New User'
    }
  },
  methods: {
    modify () {
      alert('Modifica')
      this.editing = false
    },
    cancelEditing () {
      this.editing = false
    },
    modalEditing () {
      this.editing = true
      this.reset()
    },
    modalNewUser () {
      this.editing = false
      this.reset()
    },
    newUser () {
      alert('New User')
    },
    reset () {
      this.name = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      this.roleId = 0
      this.image = ''
    }

  }
}
</script>

<style>
  .filter-wrapper {
    background-color: grey;
    border-radius: 5%;
  }
  .email-wrapper {
    padding: 4%;
  }

  .name-wrapper {
    padding: 4%;
  }

  .role-wrapper {
    padding: 4%;
  }

  .title-wrapper{
    padding: 4%;
  }

  .title-module{
    padding: 3% 3% 3% 0;
  }

  .hola {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
  }
</style>
