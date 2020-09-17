import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'g[text-unit]',
  templateUrl: './text-unit-svg.component.svg',
  styleUrls: ['./text-unit-svg.component.scss']
})
export class TextUnitSvgComponent implements OnInit, AfterViewInit {

  @Input() config: any;

  private isMoving = false;
  private mouseDown: Subscription;

  constructor(public element: ElementRef) {}

  ngAfterViewInit(): void {
    const nativeParentElement = this.element.nativeElement.parentElement;
    const nativeElement = this.element.nativeElement;

    console.log(this.config);
    // nativeElement.setAttribute('href', '#' + this.config.type);
    // nativeElement.setAttribute('x', this.config.x || 0) ;
    // nativeElement.setAttribute('y', this.config.y || 0) ;


    // const text = nativeElement.querySelector('text');
    // console.log(this.element)

    // this.mouseDown = fromEvent(nativeElement, 'mousedown').subscribe((eD: MouseEvent) => {
    //   this.isMoving = true;
    //
    //   const x = nativeElement.getAttribute('x');
    //   const y = nativeElement.getAttribute('y');
    //
    //   const xDelta: number = eD.x - x;
    //   const yDelta: number = eD.y - y;
    //
    //   const move = fromEvent(nativeParentElement, 'mousemove').subscribe((e: MouseEvent) => {
    //     nativeElement.setAttribute('x', e.x - xDelta);
    //     nativeElement.setAttribute('y', e.y - yDelta);
    //     nativeElement.setAttribute('transform', 'translate(' + (e.x - yDelta) + ',' + (e.y - xDelta) + ')'  );
    //
    //     nativeElement.classList.add('moving');
    //   });
    //
    //   fromEvent(nativeParentElement, 'mouseup').pipe(first()).subscribe(() => {
    //     move.unsubscribe();
    //     nativeElement.classList.remove('moving');
    //     this.isMoving = false;
    //   });
    //
    // });
  }

  ngOnInit(): void {
  }

}
