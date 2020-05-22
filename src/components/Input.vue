<template>
  <div>
    <div v-if="table === undefined" class="form-group row">
      <label :for="name" class="col-sm-12 col-form-label">{{ title }}</label>
      <div class="col-sm-12">
        <input :type="type" class="form-control" :id="name" v-model="data.data[name]" @input="emit" />
      </div>
    </div>

    <div v-else class="form-group row">
      <label :for="`${table}_${name}`" class="col-sm-12 col-form-label">{{ title }}</label>
      <div class="col-sm-12">
        <input :type="type" class="form-control" :id="`${table}_${name}`" v-model="data.data[table][index][name]" @input="emit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject, InjectReactive } from 'vue-property-decorator';
import { Section, FieldType, Data, OBJ } from '../classes/Field';

@Component
export default class Input extends Vue {
  @Prop() name!: string;
  @Prop({ default: "text" }) type!: keyof typeof FieldType;
  @Prop() title!: string;
  @Inject({ default: "main" }) section!: keyof typeof Section;
  @Inject({ default: undefined }) table!: string;
  data: Data = { data: {}, fields: [] };
  @InjectReactive() index!: number;

  created() {
    this.data = <any>this.$attrs.data;

    if (this.table === undefined) {
      this.data.fields.push({
        title: this.title,
        section: this.section,
        type: this.type,
        property: this.name,
        table: undefined,
      });

      this.data.data[this.name] = (this.type == "date") ? new Date().toISOString().split('T')[0] : "";

    } else {
      this.data.fields.find((f) => f.property === this.table)?.table?.push({
        title: this.title,
        type: this.type,
        property: this.name,
      });

      (this.data.data[this.table] as OBJ[])[this.index][this.name] = (this.type == "date") ? new Date().toISOString().split('T')[0] : "";
    }
  }
  
  emit() {
    this.$emit('update:data', this.data);
  }
}
</script>