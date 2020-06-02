export enum FieldType {
  text,
  date,
  table,
  email,
  number,
}

export enum Section {
  top,
  main,
}

export type OBJ = {
  [key: string]: string | number | OBJ[]
};

export type ArrayField = {
  property: string,
  title: string,
  type: keyof typeof FieldType,
};

export type Field = {
  property: string,
  section: keyof typeof Section,
  title: string,
  type: keyof typeof FieldType,
  table: undefined | Array<ArrayField>,
};

export class Data {
  data: OBJ = {};
  fields: Array<Field> = [];
  filename: string = "";
  topic: string = "";
};

function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function dateToFilename(date: string) {
  return date.split("-").reverse().join("");
}

export function setFilename(data: Data, fields: string[], suffix: string) {
  let name = "";
  
  for (const field of fields) {
    for (let i = 0; i < data.fields.length; i++) {
      if (data.fields[i].property === field) {
        const type = data.fields[i].type;
        if (type === "date") {
          name = name + dateToFilename(data.data[field] as string) + "_";
        } else if (type === "text") {
          name = name + (data.data[field] as string).replace(/ /g, "_") + "_";
        } else {
          name = name + data.data[field] + "_";
        }
      }
    }
  }

  data.filename = name + suffix;
}


export function parseForm(data: Data) : null | string {
  for (const prop in data.data) {
    if (data.data[prop] === "") {
      return "Wszystkie pola są wymagane";
    }
  }

  for (let i = 0; i < data.fields.length; i++) {
    if (data.fields[i].type === "email") {
      const email = data.data[data.fields[i].property] as string;
      if (!validateEmail(email)) return "Niewłaściwy adres email";
    }
  }

  const tableFields = data.fields.filter((f: any) => f.type === "table");
  for (let i = 0; i < (data.data[tableFields[i].property] as ArrayField[]).length; i++) {
    const table = data.data[tableFields[i].property] as OBJ[];

    for (let j = 0; j < table.length; j++) {
      let empties = 0;
      let count = 0;
      if (tableFields[i].table === undefined) continue;

      const tableData = tableFields[i].table;
      if (tableData === undefined) continue;

      for (const item of tableData) {
        if ((table[j][item.property] as any) === undefined || (table[j][item.property] === "")) empties++;
        count++;
      }

      if (empties > 0) return "Wszystkie pola są wymagane";
    }

    if (i === tableFields.length-1) return null;
  }
  return null;
}