import { Component, ElementRef, Input, OnInit} from '@angular/core';
import {TextUnitConfig} from '../extends/text-unit-config';
import {SchemaUnit} from '../extends/schema-unit';

@Component({
  selector: 'app-start-unit',
  templateUrl: './start-unit.component.html',
  styleUrls: ['./start-unit.component.scss']
})
export class StartUnitComponent
  implements SchemaUnit, OnInit {

  @Input() config: TextUnitConfig;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.classList.add('start-schema-unit');
  }

}
