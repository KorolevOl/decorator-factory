import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextUnitComponent } from './text-unit.component';

describe('TextUnitComponent', () => {
  let component: TextUnitComponent;
  let fixture: ComponentFixture<TextUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
