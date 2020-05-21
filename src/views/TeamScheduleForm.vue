<template>
  <div class="container">
    <Navbar />

    <div v-if="alert" class="alert alert-danger">Wszystkie pola są wymagane.</div>

    <Table name="tasks" title="Zadania projektowe" :data.sync="data">
      <Input name="classDate" title="Data zajęć wg organizacji roku akademickiego" type="date" :data.sync="data"/>
      <Input name="taskNumber" title="Numer zadania" type="number" :data.sync="data"/>
      <Input name="taskTopic" title="Temat zadania" :data.sync="data"/>
      <Input name="workers" title="Osoba (osoby) realizująca - imię i nazwisko" :data.sync="data"/>
      <Input name="startDate" title="Data rozpoczęcia" type="date" :data.sync="data"/>
      <Input name="finishDate" title="Data zakończenia" type="date" :data.sync="data"/>
      <Input name="realizationTime" title="Czas realizacji (w dniach)" type="number" :data.sync="data"/>
      <Input name="millestones" title="Wyszczególnione millestones" :data.sync="data"/>
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
export default class TeamScheduleForm extends Vue {
  data: Data = new Data();
  alert = false;

  generate() {
    if (!parseForm(this.data)) {
      this.alert = true;
      setTimeout(() => { this.alert = false}, 3000);
      scrollTo(0, 0);
      return;
    }

    const base = btoa(encodeURIComponent(JSON.stringify(this.data)));
    window.open(`/preview/${base}`);
  }
}

</script>