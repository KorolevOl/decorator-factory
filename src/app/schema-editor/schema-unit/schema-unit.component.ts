import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AnyUnitConfig } from '../extends/schema-unit-config';
import { SchemaUnit } from '../extends/schema-unit';


import {SchemaLine} from '../extends/schema-line';
import { Movable } from '../extends/movable';
// import { ClassStatistic } from '../../util/decorator-factory';


@Movable()
@SchemaLine()
@Component({
  selector: 'app-schema-unit',
  templateUrl: './schema-unit.component.html',
  styleUrls: ['./schema-unit.component.scss']
})
// @ClassStatistic()
export class SchemaUnitComponent
  implements SchemaUnit, OnInit, AfterViewInit {

  @Input() public config: AnyUnitConfig;
  @Input() schemaEditorRef: ElementRef;

  @Input() svgNative: HTMLElement;

  svgLineNative: Element;

  constructor(private element: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    this.config.instance = this;
    this.renderer.addClass(nativeElement, 'schema-unit');
  }

  ngAfterViewInit(): void {}

}


