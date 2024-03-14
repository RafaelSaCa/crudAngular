import { Funcionario } from './../model/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.scss']
})
export class ListaFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  colunas = ['Situacao', 'Nome', 'Sobrenome','Departamento',  'Acoes', 'Excluir']


  constructor() {


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(id: number){

  }
}
