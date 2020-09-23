import {Subject, Subscription} from 'rxjs';
import {Renderer2} from '@angular/core';

export type SchemaLineParam = 'on' | 'off';

export function SchemaLineDecorator(Target: any): any {

  const originalNgAfterViewInit = Target.prototype.ngAfterViewInit;
  Target.prototype.ngAfterViewInit = function(...args): void {
    this.ngAfterViewInit$.complete();
    originalNgAfterViewInit?.apply(this, args);
  };

  const originalNgOnDestroy = Target.prototype.ngOnDestroy;
  Target.prototype.ngOnDestroy = function(...args): void {
    this.ngOnDestroy$.complete();
    originalNgOnDestroy?.apply(this, args);
  };

  return class extends Target {
    constructor(...args: any[]) {
      super(...args);

      if (!this.ngAfterViewInit$) {
        this.ngAfterViewInit$ = new Subject<any>();
      }
      if (!this.ngOnDestroy$) {
        this.ngOnDestroy$ = new Subject<any>();
      }

      this.ngAfterViewInit$.subscribe(() => {}, () => {}, () => {
        this.useLine('on');
      });

      this.ngOnDestroy$.subscribe(() => {}, () => {}, () => {
        this.useLine('off');
      });
    }

    public ngAfterViewInit$: Subject<any>;
    public ngOnDestroy$: Subject<any>;

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
          if (this.config.parent) {
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

    lineInit(): void {
      this.createSvgLine();
      this.updateLineCoordinates();
      this.onMoveSubscription = this.onMoveSubject.subscribe(() => {
        this.updateLineCoordinates();
      });
      this.parentOnMoveSubscription = this.config.parent.instance.onMoveSubject.subscribe(() => {
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


  };
}

export function SchemaLine(): ClassDecorator  {
  return SchemaLineDecorator;
}
