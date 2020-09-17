import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema-editor-svg',
  templateUrl: './schema-editor-svg.component.svg',
  styleUrls: ['./schema-editor-svg.component.scss']
})
export class SchemaEditorSvgComponent implements OnInit {

  public arr = [
    {type: 'text-unit', x: 0, y: 20},
    {type: 'text-unit', x: 10, y: 10}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
