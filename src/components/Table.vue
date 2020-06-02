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
import { Data } from '../classes/Field';

@Component
export default class Table extends Vue {
  @Prop() name!: string;
  @Prop() title!: string;
  @ProvideReactive() index = 0;
  @Provide() table!: string;
  @Provide() section = "main";
  data: any = { data: {}, fields: [], filename: "", topic: "" };
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
      section: "main",
      type: "table",
      property: this.name,
      table: [],
    });
  }

  increment() {
    if (this.index < this.length-1) {
      this.index++;
      return;
    }

    if (this.isEmpty()) return;

    this.index++;
    if (this.index === this.length) {
      this.data.data[this.name][this.index] = {};
      this.length++;
    }
  }

  decrement() {
    if (this.index == 0) return;

    if (this.index < this.length-1) {
      this.index--;
      return;
    }

    if (this.isEmpty(true)) {
      this.data.data[this.name].pop();
      this.length--;
    }

    this.index--;
  }

  isEmpty(all = false) {
    if (Object.entries(this.data.data[this.name][this.index]).length === 0) return true;
    let empty = true;
    for (const prop in this.data.data[this.name][this.index]) {
      if (this.data.data[this.name][this.index][prop] !== "") {
        if (all) return false;
        empty = false;
        break;
      }
    }
    if (empty) return true;
    else return false;
  }
}
</script>

<style scoped>
.table {
  margin-top: 40px;
}
</style>