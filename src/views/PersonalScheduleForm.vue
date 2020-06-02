<template>
  <div class="container">
    <Navbar />

    <div v-if="alert !== null" class="alert alert-danger">{{ alert }}</div>

    <Table name="schedule" title="Harmonogram pracy własnej" :data.sync="data">
      <Input name="classDate" title="Data zajęć wg organizacji roku akademickiego" type="date" :data.sync="data"/>
      <Input name="taskNumber" title="Numer zadania projektowego" type="number" :data.sync="data"/>
      <Input name="realizationDate" title="Data realizacji" type="date" :data.sync="data"/>
      <Input name="subject" title="Temat zadania projektowego (tytuł)" :data.sync="data"/>
      <Input name="fullName" title="Imie i nazwisko" :data.sync="data"/>
      <Input name="fuctions" title="Pełnione funkcje w projekcie" :data.sync="data"/>
      <Input name="realizationTime" title="Czy zrealizowano w terminie (Tak/Nie jeśli nie wskazanie powodu" :data.sync="data"/>
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
export default class PersonalScheduleForm extends Vue {
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