export default class OrganizationData {
  classDate: Date = new Date();
  students: Array<{
    fullname: string,
    job1: string,
    job2: string,
  }> = [];
  skills: string = "";
  groupName: string = "";
  email: string = "";
  classNumber: string = "";
  subject: string = "";
}