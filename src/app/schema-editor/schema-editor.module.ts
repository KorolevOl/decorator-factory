import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextUnitComponent} from './text-unit/text-unit.component';
import {SchemaEditorComponent} from './schema-editor.component';
import {StartUnitComponent} from './start-unit/start-unit.component';
import {IfUnitComponent} from './if-unit/if-unit.component';
import {DoUnitComponent} from './do-unit/do-unit.component';
import {SchemaUnitComponent} from './schema-unit/schema-unit.component';



@NgModule({
  declarations: [
    TextUnitComponent,
    SchemaEditorComponent,
    TextUnitComponent,
    StartUnitComponent,
    IfUnitComponent,
    DoUnitComponent,
    SchemaUnitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SchemaEditorComponent
  ]
})
export class SchemaEditorModule { }
