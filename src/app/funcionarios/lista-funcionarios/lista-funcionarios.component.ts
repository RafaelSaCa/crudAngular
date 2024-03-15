import { Observable, catchError, of } from 'rxjs';
import { Funcionario } from './../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogErroComponent } from 'src/app/shared/components/dialog-erro/dialog-erro.component';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.scss']
})
export class ListaFuncionariosComponent implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  colunas = ['Situacao', 'Nome', 'Sobrenome','Departamento',  'Acoes', 'Excluir']


  constructor( private service: FuncionariosService,
                      public dialog: MatDialog

    ) {

    this.funcionarios$ = this.service.list()
       .pipe(
           catchError( error => {
            this.onError('Ocorreu algum erro ao carregar os dados!');
            return of ([ ])
           })
       );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onError( msgErro : string ){
    this.dialog.open( DialogErroComponent, {
      data: msgErro,
      width: '450px',
      height:'300px',
    })
  }

  openDialog(id: number){}

}
