import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextUnitSvgComponent } from './text-unit-svg.component';

describe('TextUnitSvgComponent', () => {
  let component: TextUnitSvgComponent;
  let fixture: ComponentFixture<TextUnitSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextUnitSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextUnitSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
