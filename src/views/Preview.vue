<template>
  <div class="container">
    <div class="row section-top">
      <div class="col-8"></div>
      <div class="col-4">
        <div v-for="(item, id) in getSection('top')" :key="id">
          <div v-if="fieldType(item, 'text')">
            <div class="row field">
              <div class="col-12 title">{{ item.title }}</div>
              <div class="col-12 value">{{ item.value }}</div>
            </div>
          </div>

          <div v-if="fieldType(item, 'date')">
            <div class="row field">
              <div class="col-12 title">{{ item.title }}</div>
              <div class="col-12 value">{{ printDate(item.value) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="row">
      <div class="col-12 section-title">
        <div v-for="(item, id) in getSection('title')" :key="id">
          <div v-if="fieldType(item, 'text')">
            <div class="row field">
              <div class="col-12 title">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="row section-main">
      <div class="col-12">
        <div v-for="(item, id) in getSection('main')" :key="id">
          <div v-if="fieldType(item, 'text')">
            <div class="row field">
              <div class="col-12 title">{{ item.title }}</div>
              <div class="col-12 value">{{ item.value }}</div>
            </div>
          </div>

          <div v-if="fieldType(item, 'date')">
            <div class="row field">
              <div class="col-12 title">{{ item.title }}</div>
              <div class="col-12 value">{{ printDate(item.value) }}</div>
            </div>
          </div>

          <div v-if="fieldType(item, 'students')">
            <div class="title">{{ item.title }}:</div>
            <table class="table">
              <thead>
                <tr>
                  <th>Imie i Nazwisko</th>
                  <th>Funkcja 1</th>
                  <th>Funkcja 2</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(student, stud_id) in getStudents(item.value)" :key="stud_id">
                  <td>{{ student.fullname }}</td>
                  <td>{{ student.job1 }}</td>
                  <td>{{ student.job2 }}</td>
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
import { FieldDataValue, FieldType, Section } from '@/classes/Field';

type Student = { fullname: string, jon1: string, job2: string };

@Component
export default class Preview extends Vue{

  data: FieldDataValue[] = [];

  created() {
    const data = this.$route.params.data;
    this.data = JSON.parse(decodeURIComponent(window.atob(data)));

    window.setTimeout(() => window.print(), 100);
  }

  fieldType(item: FieldDataValue, type: keyof typeof FieldType) {
    return item.type === FieldType[type];
  }

  sectionType(item: FieldDataValue, section: keyof typeof Section) {
    return item.section === Section[section];
  }

  getSection(section: keyof typeof Section) {
    return this.data.filter(d => d.section === Section[section]);
  }

  getStudents(value: Student[]) : Student[] {
    if (value == undefined) return [];
    let students = [...value];
    students.splice(students.length-1);
    return students;
  }

  printDate(value: string) {
    return value?.split('-').reverse()?.join('/');
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
