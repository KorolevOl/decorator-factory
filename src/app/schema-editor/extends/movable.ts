import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { first } from 'rxjs/operators';
import { SchemaUnitConfig } from './schema-unit-config';
import { createDecorator } from '../../util/decorator-factory';

export type MovableParam = 'on' | 'off';


@Directive()
// tslint:disable-next-line:directive-class-suffix
export class MovableDecoratorClass implements AfterViewInit, OnDestroy {

  renderer: Renderer2;

  public isMoving: boolean ;
  private mouseDown: Subscription;
  public onMove: Observable<any>;
  public onMoveSubject = new Subject();

  // Верхний правый угол
  public xLeftBottom: number;
  public yLeftBottom: number;

  // Верхний левый угол
  public xLeftTop: number;
  public yLeftTop: number;

  // Сверху в центре
  public xCenterTop: number;
  public yCenterTop: number;

  // Снизу в центре
  public xCenterBottom: number;
  public yCenterBottom: number;

  public height: number;
  public width: number;

  element: ElementRef;
  config: SchemaUnitConfig;
  schemaEditorRef: ElementRef;

  public ngAfterViewInit(): void {
    this.movable('on');
  }

  public ngOnDestroy(): void {
    this.movable('off');
  }

  protected calcDimensions(): void {
    this.height = this.element.nativeElement.offsetHeight;
    this.width = this.element.nativeElement.offsetWidth;
  }

  protected calcAllCoordinates(x: number, y: number): void {
    this.xLeftTop = x;
    this.yLeftTop = y;

    this.xCenterTop = this.xLeftTop + this.width / 2;
    this.yCenterTop = this.yLeftTop;

    this.xLeftBottom = this.xLeftTop;
    this.yLeftBottom = this.yLeftTop + this.height;

    this.xCenterBottom = this.xCenterTop;
    this.yCenterBottom = this.yLeftBottom;
  }

  protected render(): void {
    this.renderer.setStyle(this.element.nativeElement, 'top', this.yLeftTop + 'px');
    this.renderer.setStyle(this.element.nativeElement, 'left', this.xLeftTop + 'px');
  }

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

  protected updateCoordinates(x: number, y: number): void {
    this.calcAllCoordinates(x, y);
    this.render();
  }

  public move(): void {
    const nativeParentElement: HTMLElement = this.schemaEditorRef.nativeElement;
    const nativeElement: HTMLElement = this.element.nativeElement;

    this.calcDimensions();
    this.updateCoordinates(this.config.coordinates.x, this.config.coordinates.y);

    this.mouseDown = fromEvent(nativeElement, 'mousedown').subscribe((mouseClick: MouseEvent) => {
      this.isMoving = true;
      this.renderer.setStyle(nativeElement, 'cursor', 'grabbing');
      this.renderer.addClass(nativeElement, 'moving');

      const yDelta = mouseClick.y - this.yLeftTop;
      const xDelta = mouseClick.x - this.xLeftTop;

      this.onMove = fromEvent(nativeParentElement, 'mousemove');
      const move = this.onMove.subscribe((mouseMove: MouseEvent) => {
        const x = (mouseMove.x - xDelta);
        const y = (mouseMove.y - yDelta);

        this.updateCoordinates(x, y);
        this.onMoveSubject.next();
      });

      fromEvent(nativeParentElement, 'mouseup').pipe(first()).subscribe(() => {
        move.unsubscribe();
        this.isMoving = false;
        this.renderer.removeClass(nativeElement, 'moving');
        this.renderer.removeStyle(nativeElement, 'cursor');
      });

    });
  }
}


export const Movable = createDecorator(MovableDecoratorClass, ['ngAfterViewInit', 'ngOnDestroy']);
