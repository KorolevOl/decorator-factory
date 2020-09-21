import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {SchemaUnit} from '../extends/schema-unit';
import {StartUnitConfig} from '../extends/schema-unit-config';

@Component({
  selector: 'app-start-unit',
  templateUrl: './start-unit.component.html',
  styleUrls: ['./start-unit.component.scss']
})
export class StartUnitComponent
  implements SchemaUnit, OnInit {

  @Input() config: StartUnitConfig;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.classList.add('start-schema-unit');
  }

}
