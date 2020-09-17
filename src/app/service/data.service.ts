import { Injectable } from '@angular/core';

export const testDataSchema = [
  {
    unitType: 'start-unit',
    coordinates: {x: 300, y: 20},
    text: 'Количество элементов'
  },
  {
    unitType: 'text-unit',
    coordinates: {x: 10, y: 10},
    text: 'Количество элементов\n в зависимости от диаметра'
  },
  {
    unitType: 'if-unit',
    coordinates: {x: 200, y: 200},
    condition: 'diam > 10'
  },
  {
    unitType: 'if-unit',
    coordinates: {x: 350, y: 250},
    condition: 'diam > 15'
  },
  {
    unitType: 'if-unit',
    coordinates: {x: 500, y: 200},
    condition: 'diam > 20'
  },
  {
    unitType: 'do-unit',
    coordinates: {x: 200, y: 300},
    condition: 'return 1'
  },
  {
    unitType: 'do-unit',
    coordinates: {x: 350, y: 350},
    condition: 'return 2'
  },
  {
    unitType: 'do-unit',
    coordinates: {x: 500, y: 300},
    condition: 'return 3'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

}
