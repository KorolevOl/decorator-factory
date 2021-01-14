import { Subject, Subscription } from 'rxjs';
import { AfterViewInit, Directive, OnDestroy, Renderer2 } from '@angular/core';
import { createDecorator, } from '../../util/decorator-factory';
import { AnyUnitConfig } from './schema-unit-config';


export type SchemaLineParam = 'on' | 'off';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class SchemaLineDecoratorClass implements AfterViewInit, OnDestroy {
  constructor(...args: any[]) {
  }

  public config: AnyUnitConfig;

  svgNative: HTMLElement;
  private lineNativeElement: Element;
  private onMoveSubject: Subject<any>;
  private onMoveSubscription: Subscription;

  // private parentOnMoveSubject: Subject<any>;
  private parentOnMoveSubscription: Subscription;

  // Сверху в центре
  private xCenterTop: number;
  private yCenterTop: number;

  // Снизу в центре
  private xCenterBottom: number;
  private yCenterBottom: number;

  renderer: Renderer2;

  public useLine(schemaLineParam: SchemaLineParam = 'on'): void {
    switch (schemaLineParam) {
      case 'on': {
        if (this.config?.parent) {
          this.lineInit();
        }
        break;
      }
      case 'off': {
        this.onMoveSubscription.unsubscribe();
        this.parentOnMoveSubscription.unsubscribe();
        break;
      }
    }
  }

  ngAfterViewInit(): void {
    this.useLine('on');
  }

  ngOnDestroy(): void {
    this.useLine('off');
  }

  lineInit(): void {
    this.createSvgLine();
    this.updateLineCoordinates();
    this.onMoveSubscription = this.onMoveSubject.subscribe(() => {
      this.updateLineCoordinates();
    });
    this.parentOnMoveSubscription = this.config?.parent.instance.onMoveSubject.subscribe(() => {
      this.updateLineCoordinates();
    });
  }

  private updateLineCoordinates(): void {
    this.renderer.setAttribute(this.lineNativeElement, 'x1', this.config.parent.instance.xCenterBottom + '');
    this.renderer.setAttribute(this.lineNativeElement, 'y1', this.config.parent.instance.yCenterBottom + '');
    this.renderer.setAttribute(this.lineNativeElement, 'x2', this.xCenterTop + '');
    this.renderer.setAttribute(this.lineNativeElement, 'y2', this.yCenterTop + '');
  }

  private createSvgLine(): void {
    this.lineNativeElement = this.renderer.createElement('line', 'svg');
    this.renderer.appendChild(this.svgNative, this.lineNativeElement);
  }

}

export const SchemaLine = createDecorator(SchemaLineDecoratorClass, ['ngAfterViewInit', 'ngOnDestroy']);
