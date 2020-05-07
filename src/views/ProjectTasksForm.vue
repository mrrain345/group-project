<template>
  <div class="container">
    <Navbar />

    <div class="form-group row">
      <label for="classDate" class="col-sm-12 col-form-label">{{ title('classDate') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="classDate" v-model="data.classDate" />
      </div>
    </div>

    <div class="form-group row">
      <label for="plannedDate" class="col-sm-12 col-form-label">{{ title('plannedDate') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="plannedDate" v-model="data.plannedDate" />
      </div>
    </div>

    <div class="form-group row">
      <label for="taskNumber" class="col-sm-12 col-form-label">{{ title('taskNumber') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="taskNumber" v-model="data.taskNumber" />
      </div>
    </div>

    <div class="form-group row">
      <label for="taskName" class="col-sm-12 col-form-label">{{ title('taskName') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="taskName" v-model="data.taskName" />
      </div>
    </div>

    <div class="form-group row">
      <label for="workers" class="col-sm-12 col-form-label">{{ title('workers') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="workers" v-model="data.workers" />
      </div>
    </div>

    <div class="form-group row">
      <label for="realisationForm" class="col-sm-12 col-form-label">{{ title('realisationForm') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="realisationForm" v-model="data.realisationForm" />
      </div>
    </div>
   
    <div class="form-group row">
      <label for="verificationMethod" class="col-sm-12 col-form-label">{{ title('verificationMethod') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="verificationMethod" v-model="data.verificationMethod" />
      </div>
    </div>

    <div class="form-group row">
      <label for="resultForwarding" class="col-sm-12 col-form-label">{{ title('resultForwarding') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="resultForwarding" v-model="data.resultForwarding" />
      </div>
    </div>

    <br/>

    <button class="btn btn-primary float-right" style="margin-bottom: 40px;" @click="generate">
      Generuj PDF
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import ProjectTasksData from '@/classes/ProjectTasksData';
import { FormData } from '@/classes/Field';

@Component({
  components: {
    Navbar,
  }
})
export default class ProjectTasksForm extends Vue {
  data = new ProjectTasksData();


  generate() {
    const base = FormData.toBaseString(this.data);
    window.open(`/preview/${base}`);
  }

  title(fieldName: string) : string {
    return FormData.getTitle(this.data, fieldName);
  }
}

</script>