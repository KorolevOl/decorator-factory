import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {SchemaUnitConfig} from '../extends/schema-unit-config';
import {logClass, logProperty} from '../extends/debug';
import {Movable, MovableParam} from '../extends/movable';
import {SchemaUnit} from '../extends/schema-unit';

// @logClass()
@Component({
  selector: 'app-schema-unit',
  templateUrl: './schema-unit.component.html',
  styleUrls: ['./schema-unit.component.scss']
})
@Movable()
export class SchemaUnitComponent
  implements SchemaUnit, OnInit, AfterViewInit, OnDestroy {

  @Input() public config: SchemaUnitConfig;
  @Input() schemaEditorRef: ElementRef;

  public movable: (movableParam: MovableParam) => void;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.classList.add('schema-unit');
  }

  ngAfterViewInit(): void {
    this.movable('on');
  }

  ngOnDestroy(): void {
    this.movable('off');
  }

}
