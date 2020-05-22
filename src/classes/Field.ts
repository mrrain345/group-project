export enum FieldType {
  text,
  date,
  table,
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


export function parseForm(data: any) {
  for (const prop in data.data) {
    if (data.data[prop] === "") {
      return false;
    }
  }

  const tableFields = data.fields.filter((f: any) => f.type === "table");
  for (let i = 0; i < data.data[tableFields[i].property].length; i++) {
    const table = data.data[tableFields[i].property];

    for (let j = 0; j < table.length; j++) {
      let empties = 0;
      let count = 0;

      for (const item of tableFields[i].table) {
        console.log(item.property, table[j], j);
        if (table[j][item.property] === undefined || table[j][item.property] === "") empties++;
        count++;
      }

      if (empties > 0) return false;
    }

    if (i === tableFields.length-1) return true;
  }
}