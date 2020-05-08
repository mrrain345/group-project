import { Field, FieldType, Section } from "@/classes/Field";

export default class PersonalScheduleData {
  @Field("Data zajęć wg organizacji roku akademickiego", Section.top, FieldType.date)
  classDate: string = new Date().toISOString().split('T')[0];

  @Field("Numer zadania projektowego", Section.top,  FieldType.date)
  taskNumber: string = "";

  @Field("Data realizacji", Section.top, FieldType.date)
  realizationDate: string = new Date().toISOString().split('T')[0];
  
  @Field("Temat zadania projektowego (tytuł)", Section.title)
  subject: string = "";

  @Field("Imie i nazwisko", Section.main)
  fullName: string = "";

  @Field("Pełnione funkcje w projekcie", Section.main)
  functions: string = "";

  @Field("Czy zrealizowano w terminie (Tak/Nie jeśli nie wskazanie powodu)", Section.main)
  realizationTime: string = "";
};