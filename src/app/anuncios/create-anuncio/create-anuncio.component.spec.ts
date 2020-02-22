import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnuncioComponent } from './create-anuncio.component';

describe('CreateAnuncioComponent', () => {
  let component: CreateAnuncioComponent;
  let fixture: ComponentFixture<CreateAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
