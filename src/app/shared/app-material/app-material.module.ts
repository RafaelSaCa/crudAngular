import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared.module';


@NgModule({
    exports: [
      MatTableModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatDialogModule,

    ],
})
export class AppMaterialModule { }
