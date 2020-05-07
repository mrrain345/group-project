<template>
  <div class="nav container">
    <router-link to="/organization-data">Dane Organizacyjne</router-link>
    <router-link to="/project-tasks">Zadania Projektowe</router-link>
    <router-link to="/project-schedule">Harmonogram pracy zespołu</router-link>
    <router-link to="/personal-schedule">Harmonogram pracy własnej</router-link>
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {

}
</script>

<style scoped>
.nav {
  padding: 30px;
  text-align: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  border-left: solid 2px #2c3e50;
}

.nav a:first-child {
  border-left: none;
  padding-left: 0;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>