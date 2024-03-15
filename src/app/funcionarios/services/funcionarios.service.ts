import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';
import { environment } from 'src/enviroments/enviroment.development';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private ApiUrl = `${environment.ApiUrl}/funcionarios`;

  constructor( private httpClient: HttpClient) { }

  list(){
    return  this.httpClient.get<Funcionario[]>(this.ApiUrl)
        .pipe(
          first(),
          delay(1500),

        );

  }
}
