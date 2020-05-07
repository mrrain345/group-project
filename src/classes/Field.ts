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

interface MyWindow extends Window { _fieldData: { [key: string]: FieldData[]}; }
declare var window: MyWindow

type Property = (target: object, property: string) => void

export function Field(title: string, section: Section, type: FieldType = FieldType.text) : Property {
  return function(target: object, property: string) {
    const className = target.constructor.name;
    if (window._fieldData === undefined) window._fieldData = {};
    if (window._fieldData[className] === undefined) window._fieldData[className] = [];
    window._fieldData[className].push({ title, section, type, property });
  }
}

export namespace FormData {
  export function getFieldData(className: string) : FieldData[] {
    return window._fieldData[className];
  }

  export function getTitle(data: any, fieldName: string): string {
    const className = data.constructor.name;
    return window._fieldData[className].find(i => i.property == fieldName)?.title ?? "";
  }

  export function toBaseString(data: any): string {
    const className = data.constructor.name;
    const formData: FieldDataValue[] = [];

    for (let item of window._fieldData[className]) {
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