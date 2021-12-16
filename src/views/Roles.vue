<template>
  <b-container>
    <b-row class="title-module">
      <b-col sm="1"></b-col>
      <b-col sm="8"></b-col>
      <b-col sm="3">
        <b-button v-b-modal.modal-2 @click="modalNewRole">Add Role</b-button>
      </b-col>
    </b-row>
    <b-table striped hover :items="rolesData" :fields="fields">
      <template #cell(Acciones)="data">

        <b-row>
          <b-col cols="4"></b-col>
          <b-col cols="2">
            <a v-b-modal.modal-2 @click="modalEditing(data.item)">
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
          <b-row v-for="item in PermissionsLightList" :key="item.role">
            <b-col sm="12">
              <h6>{{item.name}}</h6>
              <PermissionLights :role="item.role"  @click="item.click" />
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Roles',
  props: { },
  components: {
    PermissionLights
  },
  data () {
    return {
      items: [{ Id: 1, Name: 'Nacho', Users: 1, Roles: 0 }],
      fields: ['id', 'name', 'permissionUser', 'permissionRole', 'permissionProfile', 'Acciones'],
      name: 'a',
      editing: false,
      role: '',
      permisionUser: null,
      permisionRol: null,
      permisionProfile: null,
      id: 0,
      permisionList: ['none', 'read', 'write'],
      PermissionsLightList: [{ name: 'User Module', role: this.permisionUser, click: this.userpermission }, { name: 'Role Module', role: this.permisionRol, click: this.rolepermission }, { name: 'Profile Module', role: this.permisionProfile, click: this.profilepermission }]
    }
  },

  computed: {
    ...mapGetters(
      {
        roles: 'roles/getRoles'
      }),
    modalTitle () {
      return this.editing ? 'Editing' : 'New Role'
    },
    rolesData () {
      return this.formatDataTable(this.roles)
    }
  },

  methods: {
    ...mapActions({
      addRol: 'roles/addRole',
      deleteRol: 'roles/deleteRole',
      modifyRole: 'roles/modifyRole'
    }),
    formatDataTable (dataList) {
      // return this.roles
      dataList.forEach(elem => {
        elem.permissionUser = this.permisionList[elem.user]
        elem.permissionRole = this.permisionList[elem.role]
        elem.permissionProfile = this.permisionList[elem.profile]
      })
      return dataList
      // elem.userPermission =
      // const role = this.roles.find((role) => role.id === elem.roleId)
    },
    modify () {
      if (confirm('¿Seguro quieres modificar este Rol?')) {
        const rolModif = { id: this.id, name: this.name, user: this.permisionUser, profile: this.permisionProfile, role: this.permisionRol }
        this.modifyRole(rolModif)
        this.editing = false
      }
    },
    cancelEditing () {
      this.editing = false
    },
    modalEditing (data) {
      this.reset()
      this.editing = true
      this.name = data.name
      this.id = data.id
      this.permisionUser = data.user
      this.permisionProfile = data.profile
      this.permisionRol = data.role
    },
    modalNewRole (id) {
      this.editing = false
      this.reset()
    },
    newRole (newRole) {
      const rolAdd = { name: this.name, user: this.permisionUser, profile: this.permisionProfile, role: this.permisionRol }
      this.addRol(rolAdd)
      this.reset()
    },
    reset () {
      this.name = ''
      this.role = ''
      this.permisionUser = null
      this.permisionRol = null
      this.permisionProfile = null
    },
    deleteRole (pay) {
      if (confirm('¿Desea eliminar el rol llamado ' + pay.name + ' ?')) {
        this.deleteRol(pay)
      }
    },
    userpermission (e) {
      this.permisionUser = e
    },
    rolepermission (e) {
      this.permisionRol = e
    },
    profilepermission (e) {
      this.permisionProfile = e
    }
  }
}
</script>

<style>

</style>
