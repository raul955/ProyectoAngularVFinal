import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioDetails2Component } from './anuncio-details2.component';

describe('AnuncioDetailsComponent', () => {
  let component: AnuncioDetails2Component;
  let fixture: ComponentFixture<AnuncioDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
