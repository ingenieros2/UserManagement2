<template>
  <b-container class="lights-wrapper">
    <b-row class="lights-row">
      <b-col sm="2" class="center">
        <a @click.prevent="readOn">
          <div :class=readColorChange></div>
        </a>
      </b-col>
      <b-col sm="2" class="center">
        <a @click.prevent="writeOn">
          <div :class=writeColorChange></div>
        </a>
      </b-col>
      <b-col sm="2" class="center">
        <a @click.prevent="noneOn">
          <div :class=noneColorChange></div>
        </a>
      </b-col>
      <b-col sm="7"></b-col>
    </b-row>
    <b-row>
      <b-col sm="2">
        <p class="text">Read</p>
      </b-col>
      <b-col sm="2">
        <p class="text">Write</p>
      </b-col>
      <b-col sm="2">
        <p class="text">None</p>
      </b-col>
      <b-col sm="7"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PermissionLights',
  props: {
    role: Number
  },
  data () {
    return {
      valuesData: this.role
    }
  },
  computed: {
    readColorChange () {
      return (this.valuesData === 1) ? 'readCircle' : 'disabledCircle'
    },
    writeColorChange () {
      return (this.valuesData === 2) ? 'writeCircle' : 'disabledCircle'
    },
    noneColorChange () {
      return (this.valuesData === 0) ? 'noneCircle' : 'disabledCircle'
    }
  },
  methods: {
    readOn () {
      this.valuesData = 1
      this.$emit('click', 1)
    },
    writeOn () {
      this.valuesData = 2
      this.$emit('click', 2)
    },
    noneOn () {
      this.valuesData = 0
      this.$emit('click', 0)
    }
  }
}
</script>

<style>
.readCircle{
  height: 25px;
  width: 25px;
  background-color: green;
  border-radius: 50%;
}
.writeCircle{
  height: 25px;
  width: 25px;
  background-color: green;
  border-radius: 50%;
}
.noneCircle{
  height: 25px;
  width: 25px;
  background-color: green;
  border-radius: 50%;
}
.disabledCircle{
  height: 25px;
  width: 25px;
  background-color: grey;
  border-radius: 50%;
}
.text{
  font-weight: bold;
  font-size: 12px;
  text-align: center;
}
.light{
  display: flex;
  justify-content: center;
  align-content: center;
}
.center{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
