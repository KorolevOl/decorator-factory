import {fromEvent, Subscription} from 'rxjs';
import {ElementRef} from '@angular/core';
import {first} from 'rxjs/operators';
import {SchemaUnitConfig} from './schema-unit-config';

export type MovableParam = 'on' | 'off';

export class Movable_old{
  public isMoving = false;
  private mouseDown: Subscription;

  element: ElementRef;
  config: SchemaUnitConfig;
  schemaEditorRef: ElementRef;

  constructor() {}

  public movable(movableParam: MovableParam = 'on'): void {
    console.log('schemaEditorRef-move', this.schemaEditorRef);
    switch (movableParam) {
      case 'on': {
        this.move();
        break;
      }
      case 'off': {
        this.mouseDown.unsubscribe();
        break;
      }
    }
  }

  move(): void {
    const nativeParentElement = this.schemaEditorRef.nativeElement;
    const nativeElement: HTMLElement = this.element.nativeElement;

    nativeElement.style.left = this.config.coordinates.x + 'px';
    nativeElement.style.top = this.config.coordinates.y + 'px';


    this.mouseDown = fromEvent(nativeElement, 'mousedown').subscribe((eD: MouseEvent) => {
      this.isMoving = true;

      nativeElement.style.cursor = 'grabbing';

      const x = nativeElement.offsetLeft;
      const y = nativeElement.offsetTop;

      const xDelta = eD.x - x;
      const yDelta = eD.y - y;

      const move = fromEvent(nativeParentElement, 'mousemove').subscribe((e: MouseEvent) => {

        nativeElement.style.left = (e.x - xDelta) + 'px';
        nativeElement.style.top = (e.y - yDelta) + 'px';

        nativeElement.classList.add('moving');
      });

      fromEvent(nativeParentElement, 'mouseup').pipe(first()).subscribe(() => {
        move.unsubscribe();
        nativeElement.classList.remove('moving');
        this.isMoving = false;
        nativeElement.style.cursor = '';
      });

    });
  }
}



export const Movable = (config?: any) => {
  return (Constructor: any): any =>  {
    return class extends Constructor {
      constructor( ...args: any[] ) {
        super(...args);
      }

      public isMoving1 = false;
      private mouseDown: Subscription;

      element: ElementRef;
      config: SchemaUnitConfig;
      schemaEditorRef: ElementRef;

      public movable(movableParam: MovableParam = 'on'): void {
        switch (movableParam) {
          case 'on': {
            this.move();
            break;
          }
          case 'off': {
            this.mouseDown.unsubscribe();
            break;
          }
        }
      }

      public move(): void {
        const nativeParentElement = this.schemaEditorRef.nativeElement;
        const nativeElement: HTMLElement = this.element.nativeElement;

        nativeElement.style.left = this.config.coordinates.x + 'px';
        nativeElement.style.top = this.config.coordinates.y + 'px';


        this.mouseDown = fromEvent(nativeElement, 'mousedown').subscribe((eD: MouseEvent) => {
          this.isMoving = true;

          nativeElement.style.cursor = 'grabbing';

          const x = nativeElement.offsetLeft;
          const y = nativeElement.offsetTop;

          const xDelta = eD.x - x;
          const yDelta = eD.y - y;

          const move = fromEvent(nativeParentElement, 'mousemove').subscribe((e: MouseEvent) => {

            nativeElement.style.left = (e.x - xDelta) + 'px';
            nativeElement.style.top = (e.y - yDelta) + 'px';

            nativeElement.classList.add('moving');
          });

          fromEvent(nativeParentElement, 'mouseup').pipe(first()).subscribe(() => {
            move.unsubscribe();
            nativeElement.classList.remove('moving');
            this.isMoving = false;
            nativeElement.style.cursor = '';
          });

        });
      }


    };
  };
};
