import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    exports: [
      MatTableModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatIconModule

    ],
})
export class AppMaterialModule { }
