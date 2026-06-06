import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPuestos } from './lista-puestos';

describe('ListaPuestos', () => {
  let component: ListaPuestos;
  let fixture: ComponentFixture<ListaPuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
