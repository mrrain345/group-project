import { Field, FieldType, Section } from "@/classes/Field";

export default class OrganizationData {
  @Field("Nr grupy dziekańskiej", Section.top)
  classNumber: string = "";

  @Field("Nazwa przedmiotu", Section.top)
  className: string = "Projekt grupowy";

  @Field("Data zajęć wg organizacji roku akademickiego", Section.top, FieldType.date)
  classDate: string = new Date().toISOString().split('T')[0];

  @Field("Nazwa grupy projektowej", Section.top)
  groupName: string = "";

  @Field("Temat projektu", Section.title)
  subject: string = "";

  @Field("Wykaz/opis umiejętności potrzebnych do realizacji projektu", Section.main)
  skills: string = "";

  @Field("Członkowie grupy i ich funkcje", Section.main, FieldType.students)
  students: Array<{
    fullname: string,
    job1: string,
    job2: string,
  }> = [];
  
  @Field("Dane kontaktowe", Section.main)
  email: string = "";

};