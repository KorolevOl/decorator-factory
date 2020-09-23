import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {AnyUnitConfig} from '../extends/schema-unit-config';
import {SchemaUnit} from '../extends/schema-unit';


import {SchemaLine} from '../extends/schema-line';
import {Movable} from '../extends/movable';



@SchemaLine()
@Movable()
@Component({
  selector: 'app-schema-unit',
  templateUrl: './schema-unit.component.html',
  styleUrls: ['./schema-unit.component.scss']
})
export class SchemaUnitComponent
  implements SchemaUnit, OnInit {

  @Input() public config: AnyUnitConfig;
  @Input() schemaEditorRef: ElementRef;

  @Input() svgNative: HTMLElement;

  svgLineNative: Element;

  constructor(private element: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    this.config.instance = this;
    nativeElement.classList.add('schema-unit');
    // console.log('renderer', this.renderer);
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }

}
