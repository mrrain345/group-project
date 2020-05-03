import { Field, FieldType } from "@/classes/Field";

export default class OrganizationData {
  @Field("Data zajęć wg organizacji roku akademickiego", FieldType.date)
  classDate: string = new Date().toISOString().split('T')[0];

  @Field("Członkowie grupy i ich funkcje", FieldType.students)
  students: Array<{
    fullname: string,
    job1: string,
    job2: string,
  }> = [];

  @Field("Wykaz/opis umiejętności potrzebnych do realizacji projektu")
  skills: string = "";

  @Field("Nazwa grupy projektowej")
  groupName: string = "";

  @Field("Dane kontaktowe")
  email: string = "";

  @Field("Nazwa przedmiotu")
  className: string = "Projekt grupowy";

  @Field("Nr grupy dziekańskiej")
  classNumber: string = "";

  @Field("Temat projektu")
  subject: string = "";
};