import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappPage } from './whatsapp.page';

describe('WhatsappPage', () => {
  let component: WhatsappPage;
  let fixture: ComponentFixture<WhatsappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
