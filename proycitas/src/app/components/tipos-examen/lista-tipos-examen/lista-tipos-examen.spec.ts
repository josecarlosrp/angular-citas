import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposExamen } from './lista-tipos-examen';

describe('ListaTiposExamen', () => {
  let component: ListaTiposExamen;
  let fixture: ComponentFixture<ListaTiposExamen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTiposExamen],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTiposExamen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
