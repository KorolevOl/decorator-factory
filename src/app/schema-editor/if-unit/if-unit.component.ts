import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {SchemaUnit} from '../extends/schema-unit';
import {IfUnitConfig} from '../extends/if-unit-component';

@Component({
  selector: 'app-if-unit',
  templateUrl: './if-unit.component.html',
  styleUrls: ['./if-unit.component.scss']
})
export class IfUnitComponent<T extends SchemaUnit>
  implements SchemaUnit, OnInit {

  @Input() config: IfUnitConfig;

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.classList.add('if-schema-unit');
  }

}
