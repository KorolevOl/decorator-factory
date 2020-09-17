import {ElementRef} from '@angular/core';

export type UnitType = 'start-unit' | 'text-unit' | 'do-unit' | 'if-unit';

export type UnitCoordinates = {
  x: number,
  y: number
};

export interface SchemaUnitConfig {
  unitType: UnitType;
  coordinates: UnitCoordinates;
}
