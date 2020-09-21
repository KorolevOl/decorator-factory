import {Component, ElementRef, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-schema-editor',
  templateUrl: './schema-editor.component.html',
  styleUrls: ['./schema-editor.component.scss']
})
export class SchemaEditorComponent implements OnInit {

  public arr = this.dataService.getDataSchemaArray();

  constructor(
    public schemaEditorRef: ElementRef,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.schemaEditorRef.nativeElement.oncontextmenu = () => false;
  }

}
