import {Subject, Subscription} from 'rxjs';

export type SchemaLineParam = 'on' | 'off';

export const SchemaLine = () => {
  return (Constructor: any): any => {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);
      }

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
        this.lineNativeElement.setAttribute('x1', this.config.parent.instance.xCenterBottom + '');
        this.lineNativeElement.setAttribute('y1', this.config.parent.instance.yCenterBottom + '');
        this.lineNativeElement.setAttribute('x2', this.xCenterTop + '');
        this.lineNativeElement.setAttribute('y2', this.yCenterTop + '');
      }


      private createSvgLine(): void {
        const svgNS = this.svgNative.namespaceURI;
        this.lineNativeElement = document.createElementNS(svgNS, 'line');
        this.svgNative.appendChild(this.lineNativeElement);
        console.log('this.lineNativeElement', this.lineNativeElement);
      }


    };
  };
};
