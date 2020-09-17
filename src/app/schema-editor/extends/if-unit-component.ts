import {SchemaUnitConfig} from './schema-unit-config';

export interface IfUnitConfig extends SchemaUnitConfig{
  condition: string;
}
