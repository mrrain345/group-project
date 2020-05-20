<template>
  <div class="container">
    <Navbar />

    <Section section="top">
      <Input name="classNumber" title="Nr grupy dziekańskiej" :data.sync="data"/>
      <Input name="className" title="Nazwa przedmiotu" :data.sync="data"/>
      <Input name="classDate" title="Data zajęć wg organizacji roku akademickiego" type="date" :data.sync="data"/>
      <Input name="groupName" title="Nazwa grupy projektowej" :data.sync="data"/>
    </Section>

    <Section section="title">
      <Input name="subject" title="Temat projektu" :data.sync="data"/>
    </Section>

    <Input name="skills" title="Wykaz/opis umiejętności potrzebnych do realizacji projektu" :data.sync="data"/>

    <Table name="workers" title="Członkowie grupy i ich funkcje" :data.sync="data">
      <Input name="firstname" title="Imię" :data.sync="data"/>
      <Input name="lastname" title="Nazwisko" :data.sync="data"/>
      <Input name="role" title="Rola/funkcja w zespole (max 2 funkcje dla 1 osoby)" :data.sync="data"/>
    </Table>

    <Input name="email" title="Dane kontaktowe" :data.sync="data"/>

    <button class="btn btn-primary float-right" style="margin-bottom: 40px;" @click="generate">
      Generuj PDF
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Input from '@/components/Input.vue';
import Table from '@/components/Table.vue';
import Section from '@/components/Section.vue';

@Component({
  components: {
    Navbar,
    Input,
    Table,
    Section,
  }
})
export default class OrganizationDataForm extends Vue {
  data: any = { data: {}, fields: [] };

  generate() {
    const base = btoa(encodeURIComponent(JSON.stringify(this.data)));
    window.open(`/preview/${base}`);
  }
}

</script>