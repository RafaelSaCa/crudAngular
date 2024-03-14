import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    ListaFuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule
  ]
})
export class FuncionariosModule { }
