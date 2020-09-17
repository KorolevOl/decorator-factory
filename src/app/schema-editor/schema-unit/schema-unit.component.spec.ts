import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaUnitComponent } from './schema-unit.component';

describe('SchemaUnitComponent', () => {
  let component: SchemaUnitComponent;
  let fixture: ComponentFixture<SchemaUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
