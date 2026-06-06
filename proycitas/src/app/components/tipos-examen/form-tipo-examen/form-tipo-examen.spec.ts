import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoExamen } from './form-tipo-examen';

describe('FormTipoExamen', () => {
  let component: FormTipoExamen;
  let fixture: ComponentFixture<FormTipoExamen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTipoExamen],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTipoExamen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
