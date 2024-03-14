import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    exports: [
      MatTableModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule

    ],
})
export class AppMaterialModule { }
