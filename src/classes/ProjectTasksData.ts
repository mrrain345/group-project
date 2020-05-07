import { Field, FieldType, Section } from "@/classes/Field";

export default class ProjectTasksData {
  @Field("Data zajęć wg organizacji roku akademickiego", Section.top, FieldType.date)
  classDate: string = new Date().toISOString().split('T')[0];
  
  @Field("Data planowanej realizacji", Section.top, FieldType.date)
  plannedDate: string = new Date().toISOString().split('T')[0];

  @Field("Numer zadania", Section.top)
  taskNumber: string = "";

  @Field("Temat zadania", Section.title)
  taskName: string = "";

  @Field("Osoby wykonujące zadanie", Section.main)
  workers: string = "";

  @Field("Forma realizacji", Section.main)
  realisationForm: string = "";

  @Field("Sposób weryfikacji", Section.main)
  verificationMethod: string = "";

  @Field("Wskazanie sposobu i adresata przekazania wyniku pracy", Section.main)
  resultForwarding: string = "";
};