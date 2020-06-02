export enum FieldType {
  text,
  date,
  table,
  email,
  number,
}

export enum Section {
  top,
  title,
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
};

function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
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