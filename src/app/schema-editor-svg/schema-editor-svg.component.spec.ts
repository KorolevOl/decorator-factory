import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaEditorSvgComponent } from './schema-editor-svg.component';

describe('SchemaEditorSvgComponent', () => {
  let component: SchemaEditorSvgComponent;
  let fixture: ComponentFixture<SchemaEditorSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaEditorSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaEditorSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
