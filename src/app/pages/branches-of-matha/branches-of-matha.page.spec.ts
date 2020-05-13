import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesOfMathaPage } from './branches-of-matha.page';

describe('BranchesOfMathaPage', () => {
  let component: BranchesOfMathaPage;
  let fixture: ComponentFixture<BranchesOfMathaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchesOfMathaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesOfMathaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
