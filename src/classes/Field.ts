export enum FieldType {
  text,
  date,
  students,
}

export enum Section {
  top,
  title,
  main
}

export type FieldData = { title: string, section: Section, type: FieldType, property: string };
export type FieldDataValue = { title: string, section: Section, type: FieldType, property: string, value: object };

interface MyWindow extends Window { _fieldData: FieldData[]; }
declare var window: MyWindow

type Property = (target: object, property: string) => void

export function Field(title: string, section: Section, type: FieldType = FieldType.text) : Property {
  return function(target: object, property: string) {
    if (window._fieldData === undefined) window._fieldData = [];
    window._fieldData.push({ title, section, type, property });
  }
}

export namespace FormData {
  export function getFieldData() : FieldData[] {
    return window._fieldData;
  }

  export function getTitle(fieldName: string): string {
    return window._fieldData.find(i => i.property == fieldName)?.title ?? "";
  }

  export function toBaseString(data: any): string {
    const formData: FieldDataValue[] = [];

    for (let item of window._fieldData) {
      formData.push({
        ...item,
        value: data[item.property],
      });
    }

    return btoa(encodeURIComponent(JSON.stringify(formData)));
  }

  export function fromBaseString(base: string): FieldDataValue[] {
    return JSON.parse(decodeURIComponent(window.atob(base)));
  }
}