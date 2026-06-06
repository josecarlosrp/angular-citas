import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSala } from './form-sala';

describe('FormSala', () => {
  let component: FormSala;
  let fixture: ComponentFixture<FormSala>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSala],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSala);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
