import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosList2Component } from './anuncios-list2.component';

describe('AnunciosList2Component', () => {
  let component: AnunciosList2Component;
  let fixture: ComponentFixture<AnunciosList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
