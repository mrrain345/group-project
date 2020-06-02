<template>
  <div class="container">
    <div class="row section-top">
      <div class="col-8"></div>
      <div class="col-4">
        <div v-for="(item, item_id) in getSection('top')" :key="item_id">
          <div class="row field">
            <div class="col-12 title">{{ item.title }}</div>
            <div class="col-12 value">{{ getValue(item) }}</div>
          </div>
        </div>
      </div>
    </div>



    <div class="row">
      <div class="col-12 section-title">
          <div class="row field">
            <div class="col-12 title">{{ data.topic }}</div>
          </div>
      </div>
    </div>



    <div class="row section-main">
      <div class="col-12">
        <div v-for="(item, item_id) in getSection('main')" :key="item_id">
          <div v-if="!fieldType(item, 'table')">
            <div class="row field">
              <div class="col-12 title">{{ item.title }}</div>
              <div class="col-12 value">{{ getValue(item) }}</div>
            </div>
          </div>

          <div v-if="fieldType(item, 'table')">
            <div class="title">{{ item.title }}:</div>
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(table, table_id) in item.table" :key="table_id">
                    {{ table.title }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(tabitem, tabitem_id) in getValue(item)" :key="tabitem_id">
                  <td v-for="(table, table_id) in item.table" :key="table_id">
                    {{ tabitem[table.property] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { FieldType, Section, Data, Field } from '@/classes/Field';

type Student = { fullname: string, jon1: string, job2: string };

@Component
export default class Preview extends Vue{

  data: Data = new Data();

  created() {
    const data = this.$route.params.data;
    this.data = JSON.parse(decodeURIComponent(window.atob(data)));
    document.title = this.data.filename;
    window.setTimeout(() => window.print(), 100);
  }

  getSection(section: keyof typeof Section) {
    return this.data.fields.filter((f: any) => f.section === section);
  }

  getValue(field: Field) {
    if (field.type === "date") {
      return (this.data.data[field.property] as string)?.split('-').reverse()?.join('/');
    } else {
      return this.data.data[field.property];
    }
  }

  fieldType(field: Field, type: keyof typeof FieldType) {
    return field.type === type;
  }
}
</script>

<style scoped>
.section-title {
  text-align: center;
  margin: 80px 0;
}

.section-title .title {
  font-size: 32px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.value {
  font-size: 24px;
  padding: 0 16px;
}

.table td {
  font-size: 24px;
}

.table th {
  font-size: 24px;
}

.field {
  padding: 10px 0;
}

.section-top .value {
  padding: 0 16px;
}

.section-main .value {
  padding-top: 10px;
  margin-bottom: 20px;
}
</style>
