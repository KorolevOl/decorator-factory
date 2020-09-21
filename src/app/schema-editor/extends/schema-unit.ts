import {Component} from '@angular/core';
import {AnyUnitConfig} from './schema-unit-config';

export interface SchemaUnit extends Component {
  config: AnyUnitConfig;
}
