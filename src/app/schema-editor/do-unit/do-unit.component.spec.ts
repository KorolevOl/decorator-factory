import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoUnitComponent } from './do-unit.component';

describe('DoUnitComponent', () => {
  let component: DoUnitComponent;
  let fixture: ComponentFixture<DoUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
