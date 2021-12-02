<template>
  <b-container>
    <b-row class="title-module">
      <b-col sm="1">
        <h1>Roles</h1>
      </b-col>
      <b-col sm="8"></b-col>
      <b-col sm="3">
        <b-button v-b-modal.modal-2 @click="modalNewRole">Add Role</b-button>
      </b-col>
    </b-row>
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
            <a @click="deleteRole(data.item)">
              <span class="material-icons">delete</span>
            </a>
          </b-col>
        </b-row>
      </template>
     </b-table>
    <b-modal id="modal-2" :title=modalTitle @ok="editing ? modify() : newRole()" @cancel="cancelEditing">
        <form>
          <b-row>
            <b-col sm="6">
            <label for="nameNewRole">Role name:</label>
            <b-input v-model="name"></b-input>
            </b-col>
          </b-row>
          <br>
          <h4>Permissions</h4>
          <hr>
          <b-row>
            <b-col sm="12">
              <h6>User Module</h6>
              <PermissionLights :role="role" @click="trafficLight" />
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <h6>Role Module</h6>
              <PermissionLights/>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <h6>Profile Module</h6>
              <PermissionLights/>
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
import PermissionLights from '../components/PermissionLights.vue'

export default {
  name: 'Roles',
  props: { },
  components: {
    PermissionLights
  },
  data () {
    return {
      items: [{ Id: 1, Name: 'Nacho', Users: 1, Roles: 0 }],
      fields: ['Id', 'Name', 'Users', 'Roles', 'Acciones'],
      name: '',
      editing: false,
      role: ''
    }
  },
  computed: {
    modalTitle () {
      return this.editing ? 'Editing' : 'New Role'
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
    modalNewRole () {
      this.editing = false
      this.reset()
    },
    newRole () {
      alert('New Role')
    },
    reset () {
      this.name = ''
      this.role = ''
    },
    deleteRole () {
      alert('Poner mensaje de confirmación')
    },
    trafficLight (e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
