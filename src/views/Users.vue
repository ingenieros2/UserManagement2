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
          <b-input v-model="nameFilter"></b-input>
        </b-row>
        <b-row class="email-wrapper">
          <label for="email">Email</label>
          <b-input v-model="emailFilter"></b-input>
        </b-row>
        <b-row class="role-wrapper">
          <label for="role">Role</label>
          <b-select :options="rolesList"></b-select>
        </b-row>
      </b-col>
      <b-col sm="9">
        <b-table striped hover :items="usersList" :fields="fields">
          <template #cell(Acciones)="data">
            <b-row>
              <b-col cols="4"></b-col>
              <b-col cols="2">
                <a v-b-modal.modal-2 @click="getItem(data.item)">
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
            <b-select v-model="roleId" :options="rolesList"></b-select>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Users',
  props: { },
  components: {},
  data () {
    return {
      fields: ['id', 'name', 'lastName', 'email', 'phone', 'roleName', 'Acciones'],
      name: '',
      lastName: '',
      email: '',
      phone: '',
      roleId: '',
      image: '',
      editing: false,
      id: ''
    }
  },
  computed: {
    ...mapGetters({
      getUsers: 'users/getUsers',
      getRoles: 'roles/getRoles'
    }),
    modalTitle () {
      return this.editing ? 'Editing' : 'New User'
    },
    usersList () {
      const list = []
      this.getUsers.forEach(usuario => {
        const role = this.getRoles.find((role) => role.id === usuario.roleId)
        usuario.roleName = role.name
        list.push(usuario)
      })
      return list
    },
    rolesList () {
      const options = []
      this.getRoles.forEach(role => {
        options.push({ value: role.id, text: role.name })
      })
      return options
    }
  },
  methods: {
    ...mapActions({
      addUser: 'users/addUser',
      modifyUser: 'users/modifyUser',
      deleteUser: 'users/deleteUser',
      addRole: 'roles/addRole'
    }),
    modify () {
      const newUser = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        roleId: this.roleId,
        image: this.image,
        id: this.id
      }
      this.checkEmptyFields() ? this.modifyUser(newUser) : alert('Hay cositas sin completar')
      this.editing = false
    },
    cancelEditing () {
      this.editing = false
    },
    getItem (data) {
      this.editing = true
      this.reset()
      this.name = data.name
      this.phone = data.phone
      this.email = data.email
      this.roleId = data.roleId
      this.image = data.image
      this.lastName = data.lastName
      this.id = data.id
    },
    modalNewUser () {
      this.editing = false
      this.reset()
    },
    newUser () {
      const newUser = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        roleId: this.roleId,
        image: this.image
      }
      this.checkEmptyFields() ? this.addUser(newUser) : alert('Hay cositas sin completar')
    },
    reset () {
      this.name = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      this.roleId = 0
      this.image = ''
      this.id = ''
    },
    checkEmptyFields () {
      return this.name !== '' && this.lastName !== '' && this.email !== '' && this.phone !== '' && this.roleId !== '' && this.image !== ''
    }

  },
  mounted () {
    this.addRole({ name: 'Admin', user: 1, profile: 1, role: 1 })
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
