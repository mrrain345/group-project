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
      <label for="realizationDate" class="col-sm-12 col-form-label">{{ title('realizationDate') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="realizationDate" v-model="data.realizationDate" />
      </div>
    </div>

    <div class="form-group row">
      <label for="subject" class="col-sm-12 col-form-label">{{ title('subject') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="subject" v-model="data.subject" />
      </div>
    </div>

    <div class="form-group row">
      <label for="fullName" class="col-sm-12 col-form-label">{{ title('fullName') }}</label>
      <div class="col-sm-12">
        <input type="date" class="form-control" id="fullName" v-model="data.fullName" />
      </div>
    </div>
   
    <div class="form-group row">
      <label for="functions" class="col-sm-12 col-form-label">{{ title('functions') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="functions" v-model="data.functions" />
      </div>
    </div>

    <div class="form-group row">
      <label for="realizationTime" class="col-sm-12 col-form-label">{{ title('realizationTime') }}</label>
      <div class="col-sm-12">
        <input type="text" class="form-control" id="realizationTime" v-model="data.realizationTime" />
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
import PersonalScheduleData from '@/classes/PersonalScheduleData';
import { FormData } from '@/classes/Field';

@Component({
  components: {
    Navbar,
  }
})
export default class PersonalScheduleForm extends Vue {
  data = new PersonalScheduleData();


  generate() {
    const base = FormData.toBaseString(this.data);
    window.open(`/preview/${base}`);
  }

  title(fieldName: string) : string {
    return FormData.getTitle(this.data, fieldName);
  }
}

</script>