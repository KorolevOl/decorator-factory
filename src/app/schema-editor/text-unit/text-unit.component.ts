import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {SchemaUnit} from '../extends/schema-unit';
import {TextUnitConfig} from '../extends/schema-unit-config';


@Component({
  selector: 'app-text-unit',
  templateUrl: './text-unit.component.html',
  styleUrls: ['./text-unit.component.scss']
})
export class TextUnitComponent
  implements SchemaUnit, OnInit {

  @Input() config: TextUnitConfig;

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.classList.add('text-schema-unit');
  }

}
