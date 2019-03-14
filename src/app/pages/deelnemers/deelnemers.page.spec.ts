import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeelnemersPage } from './deelnemers.page';

describe('DeelnemersPage', () => {
  let component: DeelnemersPage;
  let fixture: ComponentFixture<DeelnemersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeelnemersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeelnemersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
