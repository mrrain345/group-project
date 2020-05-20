<template>
  <div class="table">
    <label>{{title}}</label> ({{ index+1 }} / {{ length }})
    <slot></slot>

    <div class="float-right">
      <button class="btn btn-secondary" style="margin-right: 10px;" @click="decrement">&lt;&lt;</button>
      <button class="btn btn-secondary" @click="increment">&gt;&gt;</button>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide, ProvideReactive } from 'vue-property-decorator';

@Component
export default class Table extends Vue {
  @Prop() name!: string;
  @Prop() title!: string;
  @ProvideReactive() index = 0;
  @Provide() table!: string;
  @Provide() section = "table";
  data: any = { data: {}, fields: [] };
  length = 1;

  constructor() {
    super();
    this.table = this.name;
  }

  created() {
    this.data = this.$attrs.data;
    this.data.data[this.name] = [{}];

    this.data.fields.push({
      title: this.title,
      section: "table",
      type: "table",
      property: this.name,
      table: {},
    });
  }

  increment() {
    if (Object.entries(this.data.data[this.name][this.index]).length === 0) return;

    this.index++;
    if (this.index === this.length) {
      this.data.data[this.name][this.index] = {};
      this.length++;
    }
  }

  decrement() {
    if (this.index == 0) return;

    if (Object.entries(this.data.data[this.name][this.index]).length === 0) {
      this.data.data[this.name].pop();
      this.length--;
    }
    this.index--;
  }
}
</script>

<style scoped>
.table {
  margin-top: 40px;
}
</style>