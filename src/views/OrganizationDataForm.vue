<template>
  <div class="container">
    <div class="form-group row">
      <label for="classDate" class="col-sm-12 col-form-label">Data zajęć wg organizacji roku akademickiego</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="classDate" v-model="data.classDate" />
      </div>
    </div>

    <br/>
    
    <div class="form-group row">
      <label class="col-sm-12 col-form-label">Członkowie grupy i ich funkcje</label>

      <div class="col-sm-12 row">
        <div class="col-sm-6">
          Imie i nazwisko
        </div>
        <div class="col-sm-6">
          Funkcje pełnione w grupie (max. 2)
        </div>
      </div>

      <div v-for="(student, id) in data.students" :key="id" class="col-sm-12 row form-group">
        <div class="col-sm-6">
          <input type="text" class="form-control" id="id" v-model="student.fullname" />
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="id" v-model="data.job1" />
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="id" v-model="data.job2" />
        </div>
      </div>
    </div>

    <br/>

    <div class="form-group row">
      <label for="skills" class="col-sm-12 col-form-label">Wykaz/opis umiejętności potrzebnych do realizacji projektu</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="skills" v-model="data.skills" />
      </div>
    </div>

    <div class="form-group row">
      <label for="groupName" class="col-sm-12 col-form-label">Nazwa grupy projektowej</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="groupName" v-model="data.groupName" />
      </div>
    </div>

    <div class="form-group row">
      <label for="email" class="col-sm-12 col-form-label">Dane kontaktowe - email</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="email" v-model="data.email" />
      </div>
    </div>

    <div class="form-group row">
      <label for="classNumber" class="col-sm-12 col-form-label">Nr grupy dziekańskiej</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="classNumber" v-model="data.classNumber" />
      </div>
    </div>

    <div class="form-group row">
      <label for="subject" class="col-sm-12 col-form-label">Temat projektu</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="subject" v-model="data.subject" />
      </div>
    </div>

    <br/>

    <button class="btn btn-primary float-right">
      Generuj PDF
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import OrganizationData from '@/classes/OrganizationData';


export default class OrganizationDataForm extends Vue {
  data = new OrganizationData();

  constructor() {
    super();
    this.data.students.push({ fullname: "", job1: "", job2: "" });
    this.data.students.push({ fullname: "", job1: "", job2: "" });
    this.data.students.push({ fullname: "", job1: "", job2: "" });
  }
}

</script>