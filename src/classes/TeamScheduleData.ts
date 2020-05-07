import { Field, FieldType, Section } from "@/classes/Field";

export default class TeamScheduleData {
  @Field("Data zajęć wg organizacji roku akademickiego", Section.top, FieldType.date)
  classDate: string = new Date().toISOString().split('T')[0];
  
  @Field("Numer zadania", Section.top)
  taskNumber: string = "";

  @Field("Temat zadania", Section.title)
  taskTopic: string = "";

  @Field("Osoba (osoby) realizująca - imię i nazwisko", Section.main)
  workers: string = "";

  @Field("Data rozpoczęcia", Section.main,  FieldType.date)
  startDate: string = new Date().toISOString().split('T')[0];

  @Field("Data zakończenia", Section.main,  FieldType.date)
  finishDate: string = new Date().toISOString().split('T')[0];

  @Field("Czas realizacji (w dniach)", Section.main)
  realizationTime: string = "";

  @Field("Wyszczególnione millestones", Section.main)
  millestones: string = "";
};