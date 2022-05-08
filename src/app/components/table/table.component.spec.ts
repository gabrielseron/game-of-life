import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('doit être supérieur à 0', () => {
    expect(component.defaultHeight > 0);
});
it('doit être supérieur à 0', () => {
  expect(component.defaultWidth > 0);
});
it('doit être supérieur à 7', () => {
  expect(component.defaultWidth + component.defaultWidth >= 7);
});
it('doit être supérieur à 0', () => {
  expect(component.numberOfCells >= 1);
});
  
});
