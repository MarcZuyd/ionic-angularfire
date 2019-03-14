import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormPage } from './signup-form.page';

describe('SignupFormPage', () => {
  let component: SignupFormPage;
  let fixture: ComponentFixture<SignupFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
