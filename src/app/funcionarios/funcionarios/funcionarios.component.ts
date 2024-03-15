import { FuncionariosService } from './../services/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogErroComponent } from 'src/app/shared/components/dialog-erro/dialog-erro.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  ngOnInit(): void {

  }


}
