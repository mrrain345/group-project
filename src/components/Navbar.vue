<template>
  <div class="nav container">
    <a href="/organization-data" class="nav-link">Dane Organizacyjne</a>
    <a href="/project-tasks" class="nav-link">Zadania Projektowe</a>
    <a href="/project-schedule" class="nav-link">Harmonogram pracy zespołu</a>
    <a href="/personal-schedule" class="nav-link">Harmonogram pracy własnej</a>
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {

  mounted() {
    const navs = document.getElementsByTagName("a");
    for (let nav of navs) {
      if (this.$route.path === "/" + nav.href.split("/")[3]) {
        nav.classList.add("active");
      }
    }
  }
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
.nav a:hover {
  text-decoration: underline;
}

.nav a.active {
  color: #42b983;
}
</style>