import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuncionariosComponent } from './lista-funcionarios.component';

describe('ListaFuncionariosComponent', () => {
  let component: ListaFuncionariosComponent;
  let fixture: ComponentFixture<ListaFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaFuncionariosComponent]
    });
    fixture = TestBed.createComponent(ListaFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
