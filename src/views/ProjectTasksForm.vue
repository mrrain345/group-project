<template>
  <div class="container">
    <Navbar />

    <div v-if="alert !== null" class="alert alert-danger">{{ alert }}</div>

    <Table name="tasks" title="Zadania projektowe" :data.sync="data">
      <Input name="classDate" title="Data zajęć wg organizacji roku akademickiego" type="date" :data.sync="data"/>
      <Input name="plannedDate" title="Data planowanej realizacji" type="date" :data.sync="data"/>
      <Input name="taskNumber" title="Nr zadania" type="number" :data.sync="data"/>
      <Input name="taskName" title="Temat zadania" :data.sync="data"/>
      <Input name="workers" title="Osoby wykonujące zadanie" :data.sync="data"/>
      <Input name="realisationForm" title="Forma realizacji" :data.sync="data"/>
      <Input name="verificationMethod" title="Sposób weryfikacji" :data.sync="data"/>
      <Input name="resultForwarding" title="Wskazanie sposobu i adresata przekazania wyniku pracy" :data.sync="data"/>
   </Table>
   
    <button class="btn btn-primary float-right" style="margin-bottom: 40px;" @click="generate">
      Generuj PDF
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Input from '@/components/Input.vue';
import Table from '@/components/Table.vue';
import Section from '@/components/Section.vue';
import { parseForm, Data } from '../classes/Field';

@Component({
  components: {
    Navbar,
    Input,
    Table,
    Section,
  }
})
export default class ProjectTasksForm extends Vue {
  data: Data = new Data();
  alert: string | null = null;

  generate() {
    const alert = parseForm(this.data);
    if (alert !== null) {
      this.alert = alert;
      setTimeout(() => { this.alert = null}, 3000);
      scrollTo(0, 0);
      return;
    }

    const base = btoa(encodeURIComponent(JSON.stringify(this.data)));
    window.open(`/preview/${base}`);
  }
}

</script>