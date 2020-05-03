<template>
  <div class="container">
    <div v-for="(item, id) in data" :key="id">
      <h1>{{ item.title }}</h1>
      <span>{{ item.value }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { FieldDataValue } from '@/classes/Field';

interface WithRoute {
  $route: Route;
}

@Component
export default class Preview extends Vue{

  data: FieldDataValue[] = [];

  created() {
    const data = this.$route.params.data;
    this.data = JSON.parse(decodeURIComponent(escape(window.atob(data))));
  }
}
</script>
