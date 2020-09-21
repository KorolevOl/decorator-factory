import { Injectable } from '@angular/core';
import {AnyUnitConfig} from '../schema-editor/extends/schema-unit-config';

export const testDataSchemaNew: AnyUnitConfig[] = [
  {
    unitType: 'start-unit',
    coordinates: {x: 300, y: 20},
    text: 'Количество элементов',
    children: [
      {
        unitType: 'if-unit',
        coordinates: {x: 200, y: 200},
        condition: 'diam > 10',
        children: [
          {
            unitType: 'do-unit',
            coordinates: {x: 200, y: 300},
            condition: 'return 1'
          }
        ]
      },
      {
        unitType: 'if-unit',
        coordinates: {x: 350, y: 250},
        condition: 'diam > 15',
        children: [
          {
            unitType: 'do-unit',
            coordinates: {x: 350, y: 350},
            condition: 'return 2'
          }
        ]
      },
      {
        unitType: 'if-unit',
        coordinates: {x: 500, y: 200},
        condition: 'diam > 20',
        children: [
          {
            unitType: 'do-unit',
            coordinates: {x: 500, y: 300},
            condition: 'return 3'
          }
        ]
      }
    ]
  },
  {
    unitType: 'text-unit',
    coordinates: {x: 10, y: 10},
    text: 'Количество элементов\n в зависимости от диаметра'
  }
];


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDataSchema(): AnyUnitConfig[] {
    return testDataSchemaNew;
  }

  getDataSchemaArray(anyUnitConfig?: AnyUnitConfig[], dataSchemaArray1?: AnyUnitConfig[], parent?: AnyUnitConfig ): any {
    const dataSchemaArray: AnyUnitConfig[] = dataSchemaArray1 ? dataSchemaArray1 : [];

    if (!anyUnitConfig) {
      anyUnitConfig = this.getDataSchema();
    }

    anyUnitConfig.forEach((unit) => {
      if (parent) {
        unit.parent = parent;
      }
      dataSchemaArray.push(unit);
      if (unit.children?.length ) {
        this.getDataSchemaArray(unit.children, dataSchemaArray, unit);
      }
    });

    return dataSchemaArray;
  }

}
