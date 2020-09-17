import {Component, ElementRef, OnInit} from '@angular/core';
import {testDataSchema} from '../service/data.service';

@Component({
  selector: 'app-schema-editor',
  templateUrl: './schema-editor.component.html',
  styleUrls: ['./schema-editor.component.scss']
})
export class SchemaEditorComponent implements OnInit {

  public arr = testDataSchema;
  constructor(public schemaEditorRef: ElementRef) { }

  ngOnInit(): void {
    this.schemaEditorRef.nativeElement.oncontextmenu = () => false;
  }

}
