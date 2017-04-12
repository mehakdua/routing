/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstaddComponent } from './firstadd.component';

describe('FirstaddComponent', () => {
  let component: FirstaddComponent;
  let fixture: ComponentFixture<FirstaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
