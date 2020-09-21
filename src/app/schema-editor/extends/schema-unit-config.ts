export type UnitType = 'start-unit' | 'text-unit' | 'do-unit' | 'if-unit';

export type UnitCoordinates = {
  x: number,
  y: number
};

export interface SchemaUnitConfig {
  unitType: UnitType;
  coordinates: UnitCoordinates;
  children?: AnyUnitConfig[];
  parent?: AnyUnitConfig;
  instance?: any;
  // [props: string]: any;
}

export interface TextUnitConfig extends SchemaUnitConfig{
  text: string;
}

export interface StartUnitConfig extends SchemaUnitConfig{
  text: string;
}

export interface IfUnitConfig extends SchemaUnitConfig{
  condition: string;
}

export interface DoUnitConfig extends SchemaUnitConfig{
  condition: string;
}

export type AnyUnitConfig = StartUnitConfig | TextUnitConfig | IfUnitConfig | DoUnitConfig;

