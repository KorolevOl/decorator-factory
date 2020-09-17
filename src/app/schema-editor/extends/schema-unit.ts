import {Component} from '@angular/core';
import {SchemaUnitConfig} from './schema-unit-config';
import {TextUnitConfig} from './text-unit-config';
import {IfUnitConfig} from './if-unit-component';

export interface SchemaUnit extends Component {
  config: SchemaUnitConfig | TextUnitConfig | IfUnitConfig;
}
