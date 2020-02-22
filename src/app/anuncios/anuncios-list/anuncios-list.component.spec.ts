import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosListComponent } from './anuncios-list.component';

describe('AnunciosListComponent', () => {
  let component: AnunciosListComponent;
  let fixture: ComponentFixture<AnunciosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
