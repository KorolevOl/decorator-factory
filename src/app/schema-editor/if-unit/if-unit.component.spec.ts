import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfUnitComponent } from './if-unit.component';

describe('IfUnitComponent', () => {
  let component: IfUnitComponent;
  let fixture: ComponentFixture<IfUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
