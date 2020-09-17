import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUnitComponent } from './start-unit.component';

describe('StartUnitComponent', () => {
  let component: StartUnitComponent;
  let fixture: ComponentFixture<StartUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
