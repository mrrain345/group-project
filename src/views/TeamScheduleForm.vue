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
      <label for="taskNumber" class="col-sm-12 col-form-label">{{ title('taskNumber') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="taskNumber" v-model="data.taskNumber" />
      </div>
    </div>

    <div class="form-group row">
      <label for="taskTopic" class="col-sm-12 col-form-label">{{ title('taskTopic') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="taskTopic" v-model="data.taskTopic" />
      </div>
    </div>

    <div class="form-group row">
      <label for="workers" class="col-sm-12 col-form-label">{{ title('workers') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="workers" v-model="data.workers" />
      </div>
    </div>

    <div class="form-group row">
      <label for="startDate" class="col-sm-12 col-form-label">{{ title('startDate') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="startDate" v-model="data.startDate" />
      </div>
    </div>
   
    <div class="form-group row">
      <label for="finishDate" class="col-sm-12 col-form-label">{{ title('finishDate') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="finishData" v-model="data.finishDate" />
      </div>
    </div>

    <div class="form-group row">
      <label for="realizationTime" class="col-sm-12 col-form-label">{{ title('realizationTime') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="realizationTime" v-model="data.realizationTime" />
      </div>
    </div>

    <div class="form-group row">
      <label for="millestones" class="col-sm-12 col-form-label">{{ title('millestones') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="millestones" v-model="data.millestones" />
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
import TeamScheduleData from '@/classes/TeamScheduleData';
import { FormData } from '@/classes/Field';

@Component({
  components: {
    Navbar,
  }
})
export default class TeamScheduleForm extends Vue {
  data = new TeamScheduleData();


  generate() {
    const base = FormData.toBaseString(this.data);
    window.open(`/preview/${base}`);
  }

  title(fieldName: string) : string {
    return FormData.getTitle(this.data, fieldName);
  }
}

</script>