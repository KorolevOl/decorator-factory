import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {DataService} from './schema-editor-svg/data.service';
import {UseComponent} from './schema-editor-svg/use/use.component';
import { TextComponent } from './schema-editor-svg/text/text.component';
import { SchemaEditorComponent } from './schema-editor/schema-editor.component';
import { TextUnitComponent } from './schema-editor/text-unit/text-unit.component';
import { StartUnitComponent } from './schema-editor/start-unit/start-unit.component';
import { IfUnitComponent } from './schema-editor/if-unit/if-unit.component';
import { DoUnitComponent } from './schema-editor/do-unit/do-unit.component';
import { SchemaUnitComponent } from './schema-editor/schema-unit/schema-unit.component';


@NgModule({
  declarations: [
    AppComponent,
    UseComponent,
    TextUnitComponent,
    TextComponent,
    SchemaEditorComponent,
    TextUnitComponent,
    StartUnitComponent,
    IfUnitComponent,
    DoUnitComponent,
    SchemaUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
