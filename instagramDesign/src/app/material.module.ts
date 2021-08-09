import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    DragDropModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    DragDropModule],
})
export class MaterialModule { }
