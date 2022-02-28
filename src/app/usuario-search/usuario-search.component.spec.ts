import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSearchComponent } from './usuario-search.component';

describe('UsuarioSearchComponent', () => {
  let component: UsuarioSearchComponent;
  let fixture: ComponentFixture<UsuarioSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
