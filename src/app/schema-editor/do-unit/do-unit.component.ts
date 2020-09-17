import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {SchemaUnit} from '../extends/schema-unit';
import {IfUnitConfig} from '../extends/if-unit-component';

@Component({
  selector: 'app-do-unit',
  templateUrl: './do-unit.component.html',
  styleUrls: ['./do-unit.component.scss']
})
export class DoUnitComponent
  implements SchemaUnit, OnInit {

  @Input() config: IfUnitConfig;

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.classList.add('do-schema-unit');
  }

}
