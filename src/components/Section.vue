<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';

@Component
export default class Section extends Vue {
  @Prop() section!: string;
  @Provide("section") sec = this.section;
}
</script>