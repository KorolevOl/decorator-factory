import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {AnyUnitConfig} from '../extends/schema-unit-config';
import {Movable, MovableParam} from '../extends/movable';
import {SchemaUnit} from '../extends/schema-unit';
import {SchemaLine, SchemaLineParam} from '../extends/schema-line';


@Movable()
@SchemaLine()
@Component({
  selector: 'app-schema-unit',
  templateUrl: './schema-unit.component.html',
  styleUrls: ['./schema-unit.component.scss']
})
export class SchemaUnitComponent
  implements SchemaUnit, OnInit, AfterViewInit, OnDestroy {

  @Input() public config: AnyUnitConfig;
  @Input() schemaEditorRef: ElementRef;

  @Input() svgNative: HTMLElement;

  svgLineNative: Element;

  public movable: (movableParam: MovableParam) => void;
  public useLine: (schemaLineParam: SchemaLineParam) => void;

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    this.config.instance = this;
    nativeElement.classList.add('schema-unit');
  }


  ngAfterViewInit(): void {
    this.movable('on');
    this.useLine('on');
  }

  ngOnDestroy(): void {
    this.movable('off');
    this.useLine('off');
  }

}
