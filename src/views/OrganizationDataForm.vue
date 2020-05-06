<template>
  <div class="container">
    <Navbar />

    <div class="form-group row">
      <label for="classDate" class="col-sm-12 col-form-label">{{ title('classDate') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="classDate" v-model="data.classDate" />
      </div>
    </div>

    <br/>
    
    <div class="row">
      <label class="col-sm-12 col-form-label">{{ title('students') }}</label>

      <div class="col-sm-12 row">
        <div class="col-sm-6">
          <b>Imie i nazwisko</b>
        </div>
        <div class="col-sm-6">
          <b>Funkcje pełnione w grupie (max. 2)</b>
        </div>
      </div>

      <div v-for="(student, id) in data.students" :key="id" class="col-sm-12 row form-group">
        <div class="col-sm-6">
          <input type="text" class="form-control" id="id" v-model="student.fullname" />
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="id" v-model="student.job1" />
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="id" v-model="student.job2" />
        </div>
      </div>
    </div>

    <br/>

    <div class="form-group row">
      <label for="skills" class="col-sm-12 col-form-label">{{ title('skills') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="skills" v-model="data.skills" />
      </div>
    </div>

    <div class="form-group row">
      <label for="groupName" class="col-sm-12 col-form-label">{{ title('groupName') }}</label>
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
      <label for="classNumber" class="col-sm-12 col-form-label">{{ title('classNumber') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="classNumber" v-model="data.classNumber" />
      </div>
    </div>

    <div class="form-group row">
      <label for="subject" class="col-sm-12 col-form-label">{{ title('subject') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="subject" v-model="data.subject" />
      </div>
    </div>

    <br/>

    <button class="btn btn-primary float-right" @click="generate">
      Generuj PDF
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import OrganizationData from '@/classes/OrganizationData';
import { FormData } from '@/classes/Field';

@Component({
  components: {
    Navbar,
  }
})
export default class OrganizationDataForm extends Vue {
  data = new OrganizationData();

  @Watch('data', { deep: true })
  onchange() {
    const student = this.data.students[this.data.students.length-1];
    if (student.fullname !== "" || student.job1 !== "" || student.job2 !== "") {
      this.data.students.push({ fullname: "", job1: "", job2: "" });
    }
  }

  constructor() {
    super();
    this.data.students.push({ fullname: "", job1: "", job2: "" });
  }

  generate() {
    const base = FormData.toBaseString(this.data);
    window.open(`/preview/${base}`);
  }

  title(fieldName: string) : string {
    return FormData.getTitle(fieldName);
  }
}

</script>