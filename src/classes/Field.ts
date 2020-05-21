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




// OLD STUFF

export type FieldData = { title: string, section: keyof typeof Section, type: keyof typeof FieldType, property: string };
export type FieldDataValue = { title: string, section: keyof typeof Section, type: keyof typeof FieldType, property: string, value: object };

type Property = (target: object, property: string) => void

export function Field(title: string, section: Section, type: FieldType = FieldType.text) : Property {
  return function(target: object, property: string) {}
}

export namespace FormData {
  export function getFieldData(className: string) : FieldData[] {
    return [];
  }

  export function getTitle(data: any, fieldName: string): string {
    return "";
  }

  export function toBaseString(data: any): string {
    return "";
  }
}